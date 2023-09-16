// @ts-nocheck
// Learn more https://docs.expo.io/guides/customizing-metro
const fs = require('fs');
const path = require('path');

const escape = require('escape-string-regexp');
const { getDefaultConfig } = require('expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const root = path.resolve(__dirname, '..');
const packages = path.resolve(root, 'packages');

// List all packages under `packages/`
const workspaces = fs
  .readdirSync(packages)
  .map((p) => path.join(packages, p))
  .filter(
    (p) =>
      fs.statSync(p).isDirectory() &&
      fs.existsSync(path.join(p, 'package.json')),
  )
  .map((it) => {
    const pak = JSON.parse(
      fs.readFileSync(path.join(it, 'package.json'), 'utf8'),
    );

    // We need to make sure that only one version is loaded for peerDependencies
    // So we exclude them at the root, and alias them to the versions in example's node_modules
    const deeps = pak.peerDependencies ? Object.keys(pak.peerDependencies) : [];

    return [pak.name, ...deeps];
  })
  .sort();

const defaultConfig = getDefaultConfig(__dirname);

function flattenDeep(arr) {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val);
  }, []);
}

const modules = flattenDeep(workspaces).filter((element, index, self) => {
  return self.indexOf(element) === index;
});

console.log(modules, 'modules');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  ...defaultConfig,

  projectRoot: __dirname,
  watchFolders: [root],

  // We need to make sure that only one version is loaded for peerDependencies
  // So we block them at the root, and alias them to the versions in example's node_modules
  resolver: {
    ...defaultConfig.resolver,

    blacklistRE: exclusionList(
      modules.map(
        (m) =>
          new RegExp(`^${escape(path.join(root, 'node_modules', m))}\\/.*$`),
      ),
    ),

    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(__dirname, 'node_modules', name);
      return acc;
    }, {}),
  },
};

module.exports = config;
