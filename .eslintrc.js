module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
  ],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    // keep long-term
    'no-console': 'error', // error if console statements
    'import/extensions': 'off',
    'func-names': 'off',
    'max-len': ["error", { "code": 160 }],
    'arrow-parens': ['error', 'as-needed'],


    // remove after reformatting
    'space-before-function-paren': 'off',
    'function-paren-newline': 'off',
    'object-curly-spacing': 'off',
    'spaced-comment': 'off',
    'space-in-parens': 'off',
    'no-trailing-spaces': 'off',
    'keyword-spacing': 'off',
    'padded-blocks': 'off',

    'indent': ['error', 4],
    'react/prop-types': [
       'enabled',
      { 'ignore': 'ignore', 'customValidators': 'customValidator' }
    ]
  }
};
