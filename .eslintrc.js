module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {extensions: ['.js', '.jsx']}
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    "react/jsx-uses-react": "error",   
    "react/jsx-uses-vars": "error",
    "eqeqeq": "off",
    "no-unused-vars": "off",
    'jsx-a11y/no-noninteractive-element-interactions':[
      'off'
    ],
    'jsx-a11y/click-events-have-key-events':[
      'off'
    ],
    "react/forbid-prop-types": ['off'],
  }
};
