module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-alert': 'off', // wyłącza ostrzeżenia o alertach i promptach
    'linebreak-style': 0,
    'no-console': 'off', // ostrzeżenia o użyciu console.log
    'max-len': 'off', // wyłącza ostrzeżenie o maksymalnej długości linii (100znaków)
    'arrow-parens': [
      // brak nawiasów w przypadku jednego parametru funkcji
      2,
      'as-needed',
    ],
    'func-names': [
      // wyłącza ostrzeżenie o anonimowych funkcjach
      'error',
      'never',
    ],
    'no-restricted-syntax': [
      'error',
      // "FunctionExpression",
      // "WithStatement",
      "BinaryExpression[operator='in']",
    ],
  },
};
