/* eslint-disable */
/* Disable linting for this file for now, because none of this code will end up in production */

// Export a function. Accept the base config as the only param.

module.exports = async ({ config }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Object.assign(config.resolve.alias, aliasses);

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
      loader: 'file-loader',
      }
  );

  // Return the altered config
  return config;
};
