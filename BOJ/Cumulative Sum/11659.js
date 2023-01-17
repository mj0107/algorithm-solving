/* 구간 합 구하기 4 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const NUMBER_LIST = input.shift().split(' ').map(Number);
const PART_LIST = input.map(el => el.split(' ').map(Number));

function solution() {
  let result = [];
  let accumulationList = Array.from({ length: NUMBER_LIST.length + 1 }, () => 0);

  NUMBER_LIST.forEach((el, idx) => {
    accumulationList[idx + 1] = accumulationList[idx] + el;
  });

  for(const [START, END] of PART_LIST) {
    result.push(accumulationList[END] - accumulationList[START - 1]);
  }

  console.log(result.join('\n'));
}

solution();