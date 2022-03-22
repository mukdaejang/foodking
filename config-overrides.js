const path = require('path');
const {
  useBabelRc,
  removeModuleScopePlugin,
  override,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc(),
  removeModuleScopePlugin(),
  addWebpackAlias({ '@': path.resolve(__dirname, 'src') }),
);
