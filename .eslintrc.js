module.exports = {
  env: {
    browser: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': [0, {
      html: 'ignore',
      custom: 'ignore',
      explicitSpread: 'ignore',
    }],
    'no-nested-ternary': 'off',
  },
  globals: {
    __APP_ENV__: true,
    __BASE_LOCAL_PATH__: true,
  },
};
