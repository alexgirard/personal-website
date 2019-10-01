const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const debug = process.env.NODE_ENV !== "production";

module.exports = withSass({
  webpack(config, options) {
    return config
  }
});
