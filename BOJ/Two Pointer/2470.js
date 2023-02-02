/* 두 용액 */
const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const valueList = input.shift().split(' ').map(Number);

function solution(N, valueList) {
  let sortedValueList = valueList.sort((a, b) => a - b);
  let [start, end] = [0, N - 1];

  let [value1, value2] = [0, 0];
  let result = [];
  let min = Infinity;
  while(start < end) {
    [value1, value2] = [sortedValueList[start], sortedValueList[end]];

    if(value1 + value2 === 0) {
      result = [value1, value2];
      break;
    }
    if(Math.abs(value1 + value2) < min) {
      min = Math.abs(value1 + value2);
      result = [value1, value2];
    }

    if(value1 + value2 < 0) {
      start += 1;
    }
    else {
      end -= 1;
    }
  }

  result = result.sort((a, b) => a - b).join(' ');
  console.log(result);
}

solution(N, valueList);