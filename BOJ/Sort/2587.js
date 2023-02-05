/* 대표값2 */
const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const NUMBER_LIST = input.map(Number);

function solution(NUMBER_LIST) {
  let sortedNumberList = [...NUMBER_LIST].sort((a, b) => a - b);

  let avg = 0;
  let median = 0;

  avg = sortedNumberList.reduce((acc, cur) => acc + cur);
  avg /= sortedNumberList.length;

  median = sortedNumberList.at(Math.floor(sortedNumberList.length / 2));

  console.log(avg);
  console.log(median);
}

solution(NUMBER_LIST);