const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const X = +input.shift();

const solution = () => {
  const result = [...X.toString(2)].filter((el) => el === '1').length;

  console.log(result);
};

solution();
