const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const [N, M] = input.shift().split(' ').map(Number);
const neverListenList = input.splice(0, N);
const neverLookList = [...input];

function solution() {
  const set = new Set(neverListenList);

  const result = neverLookList.filter((el) => set.has(el)).sort();

  console.log(result.length);
  console.log(result.join('\n'));
}

solution();
