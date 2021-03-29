const sharedConfig = require('./webpack.config.shared');

sharedConfig.mode = 'production';
sharedConfig.devtool = 'none';

module.exports = sharedConfig;
