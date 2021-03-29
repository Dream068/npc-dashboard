const sharedConfig = require('./webpack.config.shared');

sharedConfig.resolve = sharedConfig.resolve || {};
sharedConfig.resolve.alias = sharedConfig.resolve.alias || {};
sharedConfig.resolve.alias['react-dom'] = '@hot-loader/react-dom';

sharedConfig.mode = 'development';
sharedConfig.devtool = 'eval-source-map';

module.exports = sharedConfig;
