const withSass = require('@zeit/next-sass');
// const withCSS = require("@zeit/next-css");
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');

const debug = process.env.NODE_ENV !== "production";

module.exports = withFonts(
  withSass({
    enableSvg: true,
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      });

      return config;
    },
  })
);