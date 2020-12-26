module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'simple-import-sort',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'multiline-ternary': 'off',
    'node/no-path-concat': 'off',
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/imports': ['error', {
      groups: [
        ['^react', '^@?\\w'],
        ['^@?\\w'],
        ['^'],
        ['^\\.'],
        ['^\\u0000'],
      ],
    }],
    'simple-import-sort/exports': 'error',
    'space-before-function-paren': 'off',
  },
}
