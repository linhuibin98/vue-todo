module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-shorthand': 0,
    'no-unused-expressions': 0,
    'no-plusplus': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
