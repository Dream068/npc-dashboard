const presets = [
  ['@babel/env', {
    useBuiltIns: 'entry',
  }],
  ['@babel/preset-react', {
    development: process.env.BABEL_ENV === 'development',
  }],
];

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-transform-runtime',
];

module.exports = { presets, plugins };
