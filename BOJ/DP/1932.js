/* 정수 삼각형 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const integerTriangle = input.map((el) => {
  return el.split(" ").map(Number);
});

function solution(n, integerTriangle) {
  let sum = 0;
  let maxIndex = 0;
  let maxValue = 0;

  for (row of integerTriangle) {
    maxValue = Math.max(row[maxIndex], row[maxIndex + 1] || 0);
    maxIndex = row.indexOf(maxValue);

    console.log(maxValue, maxIndex);

    sum += maxValue;
  }

  return sum;
}

const result = solution(n, integerTriangle);
console.log(result);
