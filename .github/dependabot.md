# Dependabot Configuration

This document explains the Dependabot configuration for the Lufa monorepo and how it helps maintain up-to-date dependencies across all packages.

## Overview

Dependabot is configured to automatically create pull requests for dependency updates in two areas:

- **npm/pnpm dependencies** across all workspace packages
- **GitHub Actions** used in CI/CD workflows

The configuration optimizes for minimal noise by grouping related updates together, reducing the number of PRs from potentially dozens to just a handful per week.

## Configuration Details

### npm Dependencies

**Schedule**: Weekly on Mondays at 9:00 AM (Europe/Paris timezone)

Dependabot scans the entire monorepo from the root directory, automatically detecting all pnpm workspace packages. Updates are grouped into two categories:

#### Development Dependencies

- Groups all `devDependencies` updates (minor and patch versions)
- Includes tools like TypeScript, ESLint, Vitest, Storybook, etc.
- Creates a single PR for all development dependency updates

#### Production Dependencies

- Groups all `dependencies` updates (minor and patch versions)
- Includes React, Single-SPA, and other runtime dependencies
- Creates a single PR for all production dependency updates

**Major version updates** are kept separate to allow for more careful review and testing.

> [!NOTE]
> The versioning strategy is set to `increase`, which is the recommended approach for pnpm workspaces to ensure consistent version resolution.

### GitHub Actions

**Schedule**: Weekly on Mondays at 9:00 AM (Europe/Paris timezone)

All GitHub Actions updates are grouped together to simplify review and merging. This includes updates to:

- `actions/checkout`
- `actions/setup-node`
- `pnpm/action-setup`
- `changesets/action`
- Custom actions used in workflows

Major updates to `changesets/action` are ignored pending a coordinated compatibility review. The repository uses action v2 with Changesets CLI v3; future major upgrades must review the CLI, workflow inputs, authentication, and private-package versioning together before revisiting the ignore rule. Minor and patch updates remain enabled.

**PR Limit**: Maximum 5 open PRs at a time to avoid overwhelming the review queue.

## Pull Request Details

Each Dependabot PR includes:

- **Conventional commit prefix**: `chore(deps)` for npm or `chore(ci)` for GitHub Actions
- **Labels**: Automatically tagged with `dependencies`, `automated`, and `ci/cd` (for Actions)
- **Changelog**: Links to release notes and commits between versions
- **Compatibility score**: GitHub's assessment of the update risk

## Handling Dependabot PRs

### Review Process

1. **Check the CI status** - Ensure all tests pass
2. **Review the changelog** - Understand what changed in the update
3. **Look for breaking changes** - Especially for major version updates
4. **Test locally if needed** - For significant updates, pull the branch and test

### Merging Strategy

**Grouped minor/patch updates** can typically be merged quickly if CI passes:

```bash
# Merge the PR through GitHub UI or:
gh pr merge <pr-number> --squash --auto
```

**Major version updates** should be reviewed more carefully:

- Read the migration guide if available
- Test the changes locally
- Consider creating a separate branch for testing
- Update code if breaking changes are present

### Disabling Specific Updates

If you need to prevent Dependabot from updating a specific dependency, add an `ignore` configuration:

```yaml
- package-ecosystem: 'npm'
  directory: '/'
  ignore:
    - dependency-name: 'specific-package'
      versions: ['5.x'] # Ignore version 5.x
```

## Configuration Customization

### Adjusting the Schedule

To change the update frequency or timing, modify the `schedule` section:

```yaml
schedule:
  interval: 'daily' # Options: daily, weekly, monthly
  day: 'wednesday' # For weekly: monday-sunday
  time: '14:00' # 24-hour format
  timezone: 'Europe/Paris'
```

### Adding More Ecosystems

Lufa currently only uses npm and GitHub Actions, but you can add other ecosystems if needed:

```yaml
# Example: Docker
- package-ecosystem: 'docker'
  directory: '/'
  schedule:
    interval: 'weekly'
```

### Customizing PR Limits

Adjust the `open-pull-requests-limit` to control how many PRs can be open simultaneously:

```yaml
open-pull-requests-limit: 5 # Default is 5, max is 10
```

## Best Practices

### Regular Maintenance

- **Review weekly**: Don't let Dependabot PRs pile up
- **Merge promptly**: Security updates should be merged as soon as possible
- **Test thoroughly**: Run the full test suite before merging grouped updates
- **Monitor changelog**: Stay informed about changes in your dependencies

### Security Updates

Dependabot automatically creates PRs for security vulnerabilities. These PRs:

- Are marked with a security label
- Should be prioritized over regular updates
- Often include details about the vulnerability (CVE)
- May bypass PR limits in critical cases

> [!WARNING]
> Security updates should be merged as soon as possible after verifying they don't break functionality.

### Dealing with Conflicts

If a Dependabot PR has merge conflicts:

1. Dependabot will attempt to rebase automatically
2. If it can't, you'll see a comment asking you to resolve conflicts
3. Use the "Resolve conflicts" button in GitHub UI, or:
   ```bash
   gh pr checkout <pr-number>
   git rebase main
   git push --force-with-lease
   ```

## Monitoring and Metrics

GitHub provides insights into Dependabot activity:

- **Security alerts**: View in the Security tab
- **Dependency graph**: See all dependencies and their relationships
- **Update history**: Track which updates were applied and when

Access these at: `https://github.com/grasdouble/Lufa/security`

## Troubleshooting

### Dependabot Not Creating PRs

**Check if Dependabot is enabled**:

1. Go to repository Settings → Code security and analysis
2. Ensure "Dependabot version updates" is enabled

**Verify the configuration**:

```bash
# Validate the YAML syntax
yamllint .github/dependabot.yml
```

### PRs Failing CI

The CI uses the per-job `GITHUB_TOKEN` to download `@grasdouble` npm packages and to post PR comments. It does not require a duplicate `LUFA_CI_SECRET_READ` in Actions and Dependabot secrets.

Before running the updated workflows, grant **Read** access to `grasdouble/Lufa-Design-System` under **Manage Actions access** in the settings of the public GitHub npm packages installed from the lockfile (`lufa_config_eslint`, `lufa_config_prettier`, and `lufa_config_tsconfig`). Workflow jobs that install dependencies request `packages: read`. If `pnpm install` still receives `401 Unauthorized`, verify that each package has this repository listed there.

`lufa_config_agents` is an internal package used only by `pnpm sync:agents`, so it is fetched on demand (at the latest published version) rather than included in the normal installation or granted to this public repository's workflows. `pnpm sync:agents:local` uses the neighboring Lufa-Core checkout instead. Syncing from the published package still requires local registry access. Do not grant this public repository Actions access to the internal package: GitHub warns that workflows from forks may then be able to read it.

The changeset automation pushes commits to Dependabot PR branches, so it still needs the separate `LUFA_CI_SECRET_DEPENDABOT` **Dependabot secret** with write access to this repository. The workflow does not install npm packages. Keep its credential separate from the read-only package access: commits pushed with `GITHUB_TOKEN` do not trigger subsequent CI workflows.

After configuring package access and the write credential, rerun the PR checks to evaluate the dependency updates themselves.

### Too Many PRs

If you're getting overwhelmed with PRs:

1. Increase grouping to include more update types
2. Reduce the update frequency (e.g., from weekly to monthly)
3. Adjust `open-pull-requests-limit` to a lower number
4. Consider ignoring non-critical dependencies

## Resources

- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)
- [Configuration Options](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
- [Keeping Your Actions Up to Date](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/keeping-your-actions-up-to-date-with-dependabot)

---

For questions or issues with the Dependabot configuration, please open an issue in the repository.
