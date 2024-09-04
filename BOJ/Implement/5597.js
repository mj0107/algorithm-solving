const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const isSubmitted = Array.from({ length: 30 + 1 }, () => false);

const solution = () => {
  input.forEach((el) => (isSubmitted[el] = true));

  for (let i = 1; i <= 30; i++) {
    if (!isSubmitted[i]) {
      console.log(i);
    }
  }
};

solution();
