import readline from 'readline-promise';

export default readline.default.createInterface({
  input: process.stdin,
  output: process.stdout
});
