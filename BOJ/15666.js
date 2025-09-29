const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const numberList = [
  ...new Set(
    input
      .shift()
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b)
  ),
];

const result = [];
const temp = [];

function getPermutation(startIndex, count) {
  if (count === M) {
    result.push(temp.join(' '));
    return;
  }

  for (let i = startIndex; i < numberList.length; i++) {
    temp.push(numberList[i]);
    getPermutation(i, count + 1);
    temp.pop();
  }
}

function solution() {
  getPermutation(0, 0);

  console.log(result.join('\n'));
}

solution();
