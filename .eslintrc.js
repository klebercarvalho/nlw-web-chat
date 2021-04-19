module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'max-len': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never']
  }
};
