const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const styledJSXWebpack = require('styled-jsx/webpack');

function addStyledJSXLoader(config, defaultLoaders) {
  const StyledJSXLoader = {
    test: /\.jsxcss$/,
    use: [
      defaultLoaders.babel,
      {
        loader: styledJSXWebpack.loader,
      },
    ],
  };
  config.module.rules.push(StyledJSXLoader);
}

module.exports = withPlugins([
  {
    webpack: (config, { defaultLoaders }) => {
      addStyledJSXLoader(config, defaultLoaders);
      return config;
    },
  },
  withSass,
]);
