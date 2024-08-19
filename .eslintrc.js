module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
