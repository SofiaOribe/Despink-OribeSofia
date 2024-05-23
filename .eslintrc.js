module.exports = {
    env: {
      browser: true,
      es2021: true,
      'react-native/react-native': true,
    },
    extends: [
      'airbnb',
      'plugin:react/recommended',
      'plugin:react-native/all',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'react-native',
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'import/prefer-default-export': 'off',
    },
  };
  