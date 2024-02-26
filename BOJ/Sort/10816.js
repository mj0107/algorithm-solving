const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const NUMBER_LIST = input.shift().split(' ').map(Number);
const M = +input.shift();
const GET_COUNT_NUMBER_LIST = input.shift().split(' ').map(Number);

const solution = () => {
  const countMap = new Map();

  NUMBER_LIST.forEach((number) => {
    if(countMap.has(number)) {
      countMap.set(number, countMap.get(number) + 1);
    }
    else {
      countMap.set(number, 1);
    }
  });

  const result = [];
  GET_COUNT_NUMBER_LIST.forEach((number) => {
    result.push(countMap.get(number) || 0);
  });

  console.log(result.join(' '));
};

solution();