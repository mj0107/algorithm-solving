const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const n = +input.shift();

function solution() {
  let result;

  if (620 <= n && n <= 780) {
    result = 'Red';
  } else if (n >= 590) {
    result = 'Orange';
  } else if (n >= 570) {
    result = 'Yellow';
  } else if (n >= 495) {
    result = 'Green';
  } else if (n >= 450) {
    result = 'Blue';
  } else if (n >= 425) {
    result = 'Indigo';
  } else if (n >= 380) {
    result = 'Violet';
  }

  console.log(result);
}

solution();
