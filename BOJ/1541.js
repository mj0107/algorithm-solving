const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

// '-' 기준으로 문자열을 나눈다.
const expression = input[0].split('-');
// 나눠진 각 문자열별로 '+'가 있다면 각각 더해서 계산해준다.
const numberList = expression.map((el) =>
  el
    .split('+')
    .map(Number)
    .reduce((acc, cur) => acc + cur)
);

function solution() {
  // 더한 모든값을 앞에서부터 순차적으로 빼준다.
  console.log(numberList.reduce((acc, cur) => acc - cur));
}

solution();
