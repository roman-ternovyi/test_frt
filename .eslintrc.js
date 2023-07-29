module.exports = {
  'env': {
    'browser': false,
    'es2021': true
  },
  'parser': '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'quotes': ['warn', 'single'],
    'semi': ['error', 'always'],
    'eqeqeq': 'off',
    'constructor-super': 'error',
    'no-cond-assign': 'error',
    'no-constant-binary-expression': 'warn',
    'no-constant-condition': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-this-before-super': 'warn',
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
    'max-classes-per-file': ['warn', 10],
    'no-else-return': 'warn',
    'no-return-await': 'warn',
    'lines-between-class-members': 'warn',
    'simple-import-sort/imports': ['error'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'unused-imports/no-unused-imports': 'error'
  }
};
