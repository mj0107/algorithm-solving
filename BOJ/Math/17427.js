const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

const solution = () => {
  let result = 0;

  // if n === 10:
  //  1 * 10
  //  2 * 5
  //  3 * 3
  //  4 * 2
  //  5 * 2
  //  6
  //  7
  //  8
  //  9
  //  10

  //  1
  //  1 + 2
  //  1 + 3
  //  1 + 2 + 4
  //  1 + 5
  //  1 + 2 + 3 + 6
  //  1 + 7
  //  1 + 2 + 4 + 8
  //  1 + 3 + 9
  //  1 + 2 + 5 + 10

  for (let i = 1; i <= N; i++) {
    // i = N이하의 수
    // Math.floor(N / i) = N이하의 수의 약수들에서 i가 나오는 횟수
    result += i * Math.floor(N / i);
  }

  console.log(result);
};

solution();
