module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    indent: 'off',
    'no-trailing-spaces': 'off',
    'global-require': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/forbid-prop-types': 0,
    camelcase: 0,
    'Unexpected alert': 0,
    'no-alert': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'function-paren-newline': 0,
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  }
};
