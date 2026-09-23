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

test('PR comments and release checkout do not depend on a read PAT', () => {
  assert.match(workflow('ds-tools-playwright-ct.yml'), /github-token: \$\{\{ github\.token \}\}/);
  assert.match(workflow('global-release-changeset.yml'), /token: \$\{\{ github\.token \}\}/);
  assert.doesNotMatch(workflow('global-release-changeset.yml'), /LUFA_CI_SECRET_READ/);
});

test('no workflow still needs the old read PAT', () => {
  for (const name of readdirSync(new URL('.github/workflows/', root)).filter((file) => file.endsWith('.yml'))) {
    assert.ok(!workflow(name).includes('LUFA_CI_SECRET_READ'), `${name} still references the read PAT`);
  }
});

test('CI runs the auth checks before installing dependencies', () => {
  const manifest = JSON.parse(readFileSync(new URL('package.json', root), 'utf8'));
  const lintWorkflow = workflow('global-tools-lint.yml');

  assert.equal(manifest.scripts['test:ci-auth'], 'node --test scripts/ci-auth.test.mjs');
  assert.match(lintWorkflow, /run: pnpm test:ci-auth/);
  assert.ok(
    lintWorkflow.indexOf('run: pnpm test:ci-auth') < lintWorkflow.indexOf('run: pnpm install --frozen-lockfile')
  );
  assert.match(lintWorkflow, /run: pnpm exec eslint scripts\/ci-auth\.test\.mjs/);
});

test('Dependabot changeset pushes keep their dedicated write credential', () => {
  const content = workflow('global-tools-dependabot-changeset.yml');
  assert.match(content, /token: \$\{\{ secrets\.LUFA_CI_SECRET_DEPENDABOT \}\}/);
  assert.doesNotMatch(content, /pnpm install|setup-node-pnpm|packages: read/);
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
