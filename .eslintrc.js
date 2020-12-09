module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 0,
    'no-console': 0
  },
  ignorePatterns: ["jest.config.js", ".eslintrc.js"],
}
