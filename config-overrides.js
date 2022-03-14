const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const {
  override,
  addBabelPreset,
  addBabelPlugin,
  addWebpackAlias,
} = require('customize-cra');

const overrideConfig = override(
  /* webpack 사용자 정의 구성 덮어쓰기 */
  (config, env) => {
    /* 개발 모드 */
    if (env === 'development') {
    }

    /* 배포 모드 */
    if (env === 'production') {
      config.devtool = false;
      config.plugins = [...config.plugins, new SpeedMeasurePlugin()];
    }

    return config;
  },

  addBabelPreset('@emotion/babel-preset-css-prop'),
  addBabelPlugin('@emotion'),

  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
);

module.exports = overrideConfig;
