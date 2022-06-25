module.exports = {
  root: true,
  // extends: '@react-native-community',
  extends: {
    extends: ['react-app', 'prettier'],
    plugins: ['prettier'],
    rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
  },
};
