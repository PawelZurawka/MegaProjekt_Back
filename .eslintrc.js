module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-alert': 'off', // wyłącza ostrzeżenia o alertach i promptach
    'linebreak-style': ['error', 'windows'],
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
