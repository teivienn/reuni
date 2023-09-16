const prettierOptions = require('./.prettierrc');

module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    semi: 'off',
    curly: ['error', 'multi-line', 'consistent'],
    'react/jsx-sort-props': [
      'error',
      { shorthandFirst: true, callbacksLast: true },
    ],
    'no-irregular-whitespace': 'error',
    '@typescript-eslint/no-shadow': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'comma-dangle': 'off',
    'no-void': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
};
