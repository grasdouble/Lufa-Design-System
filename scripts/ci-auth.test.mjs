import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { URL } from 'node:url';

const root = new URL('../', import.meta.url);
const workflow = (name) => readFileSync(new URL(`.github/workflows/${name}`, root), 'utf8');

const installWorkflows = [
  'global-tools-lint.yml',
  'global-tools-missing-changeset.yml',
  'ds-tools-packages-ci.yml',
  'ds-tools-playwright-ct.yml',
  'ds-tools-storybook-on-pr.yml',
  'ds-tools-docusaurus-update-changelog-docs.yml',
  'ds-release-lufa-prod-publish.yml',
];

test('install jobs use the built-in token with package read access', () => {
  for (const name of installWorkflows) {
    const content = workflow(name);
    assert.match(content, /packages: read/, `${name} must grant package read access`);
    assert.match(content, /github-token: \$\{\{ github\.token \}\}/, `${name} must use GITHUB_TOKEN`);
    assert.doesNotMatch(content, /LUFA_CI_SECRET_READ/, `${name} must not depend on a PAT for reads`);
  }
});

test('PR comments and the shared release do not depend on a read PAT', () => {
  assert.match(workflow('ds-tools-playwright-ct.yml'), /github-token: \$\{\{ github\.token \}\}/);
  const release = workflow('global-release-changeset.yml');
  assert.match(release, /uses: grasdouble\/Lufa-CICD\/actions\/changesets-release@changesets-release-v2/);
  assert.match(release, /token: \$\{\{ github\.token \}\}/);
  assert.match(release, /persist-credentials: false/);
  assert.match(release, /github-token: \$\{\{ secrets\.LUFA_CI_SECRET_WRITE \}\}/);
  assert.match(release, /release-token: \$\{\{ secrets\.LUFA_CI_SECRET_WRITE \}\}/);
  assert.match(release, /run: pnpm install --frozen-lockfile/);
  assert.doesNotMatch(release, /registry-token:/);
  assert.doesNotMatch(release, /LUFA_CI_SECRET_READ/);
});

test('no workflow still needs the old read PAT', () => {
  for (const name of readdirSync(new URL('.github/workflows/', root)).filter((file) => file.endsWith('.yml'))) {
    assert.ok(!workflow(name).includes('LUFA_CI_SECRET_READ'), `${name} still references the read PAT`);
  }
});

test('CI runs the auth checks and installs dependencies before shared quality checks', () => {
  const manifest = JSON.parse(readFileSync(new URL('package.json', root), 'utf8'));
  const lintWorkflow = workflow('global-tools-lint.yml');
  const authCheckIndex = lintWorkflow.indexOf('run: pnpm test:ci-auth');
  const installIndex = lintWorkflow.indexOf('run: pnpm install --frozen-lockfile');
  const buildIndex = lintWorkflow.indexOf('run: pnpm all:build');
  const checkQualityActionIndex = lintWorkflow.indexOf(
    'uses: grasdouble/Lufa-CICD/actions/check-quality@check-quality-v2'
  );

  assert.equal(manifest.scripts['test:ci-auth'], 'node --test scripts/ci-auth.test.mjs');
  assert.match(lintWorkflow, /run: pnpm test:ci-auth/);
  assert.ok(
    authCheckIndex >= 0 &&
      authCheckIndex < installIndex &&
      installIndex < buildIndex &&
      buildIndex < checkQualityActionIndex
  );
  assert.match(lintWorkflow, /run: pnpm exec eslint scripts\/ci-auth\.test\.mjs/);
});

test('the shared quality action receives each project command explicitly', () => {
  const lintWorkflow = workflow('global-tools-lint.yml');

  for (const command of ['lint-command: pnpm all:lint', 'format-command: pnpm all:prettier:check']) {
    assert.ok(lintWorkflow.includes(command), `global-tools-lint.yml must pass ${command}`);
  }
  assert.match(
    lintWorkflow,
    /typecheck-command: \$\{\{ steps\.build\.outcome == 'success' && 'pnpm all:typecheck' \|\| '' \}\}/
  );
});

test('the release workflow sets up and installs dependencies before Changesets release', () => {
  const releaseWorkflow = workflow('global-release-changeset.yml');
  const setupIndex = releaseWorkflow.indexOf('uses: grasdouble/Lufa-CICD/actions/setup-node-pnpm@setup-node-pnpm-v1');
  const installIndex = releaseWorkflow.indexOf('run: pnpm install --frozen-lockfile');
  const buildIndex = releaseWorkflow.indexOf('run: pnpm all:build');
  const releaseActionIndex = releaseWorkflow.indexOf(
    'uses: grasdouble/Lufa-CICD/actions/changesets-release@changesets-release-v2'
  );

  assert.ok(
    setupIndex >= 0 && setupIndex < installIndex && installIndex < buildIndex && buildIndex < releaseActionIndex
  );
  assert.doesNotMatch(releaseWorkflow, /build-script:/);
  assert.doesNotMatch(releaseWorkflow, /registry-token:.*LUFA_CI_SECRET_WRITE/);
});

test('shared agent rules are checked in CI and synced on the existing Dependabot branch', () => {
  const lintWorkflow = workflow('global-tools-lint.yml');
  const dependabotWorkflow = workflow('global-tools-dependabot-changeset.yml');

  assert.match(lintWorkflow, /uses: grasdouble\/Lufa-CICD\/actions\/check-quality@check-quality-v2/);
  assert.match(lintWorkflow, /check-agent-rules: 'true'/);
  assert.doesNotMatch(lintWorkflow, /actions\/sync-agents@/);
  assert.match(dependabotWorkflow, /uses: grasdouble\/Lufa-CICD\/actions\/sync-agents@sync-agents-v1/);
  assert.match(dependabotWorkflow, /mode: sync/);
  assert.match(dependabotWorkflow, /head-branch: \$\{\{ github\.head_ref \}\}/);
  assert.match(dependabotWorkflow, /github-token: \$\{\{ secrets\.LUFA_CI_SECRET_DEPENDABOT \}\}/);
});

test('the dependency report workflow installs dependencies before calling the report action', () => {
  const reportWorkflow = workflow('cron-dependency-report.yml');
  const installIndex = reportWorkflow.indexOf('run: pnpm install --frozen-lockfile');
  const reportActionIndex = reportWorkflow.indexOf(
    'uses: grasdouble/Lufa-CICD/actions/dependency-report@dependency-report-v1'
  );

  assert.match(reportWorkflow, /packages: read/);
  assert.match(reportWorkflow, /github-token: \$\{\{ github\.token \}\}/);
  assert.ok(installIndex >= 0 && installIndex < reportActionIndex);
});

test('Dependabot changeset pushes keep their dedicated write credential', () => {
  const content = workflow('global-tools-dependabot-changeset.yml');
  assert.match(content, /persist-credentials: false/);
  assert.match(content, /uses: grasdouble\/Lufa-CICD\/actions\/setup-node-pnpm@setup-node-pnpm-v1/);
  assert.match(content, /github-token: \$\{\{ github\.token \}\}/);
  assert.match(content, /uses: grasdouble\/Lufa-CICD\/actions\/dependabot-changeset@dependabot-changeset-v1/);
  assert.match(content, /github-token: \$\{\{ secrets\.LUFA_CI_SECRET_DEPENDABOT \}\}/);
  assert.doesNotMatch(content, /pnpm install|packages: read/);
});

test('the internal agents sync tool is installed only when explicitly requested', () => {
  const manifest = JSON.parse(readFileSync(new URL('package.json', root), 'utf8'));
  const lockfile = readFileSync(new URL('pnpm-lock.yaml', root), 'utf8');

  assert.equal(manifest.devDependencies['@grasdouble/lufa_config_agents'], undefined);
  assert.equal(manifest.scripts['sync:agents'], 'pnpm dlx @grasdouble/lufa_config_agents');
  assert.match(
    manifest.scripts['sync:agents:local'],
    /^node \.\.\/Lufa-Core\/packages\/config\/agents\/bin\/sync-agents\.mjs --local \.\.\/Lufa-Core$/
  );
  assert.doesNotMatch(lockfile, /lufa_config_agents/);
});
