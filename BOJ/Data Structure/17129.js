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
const passwordMap = input.slice(0, N).reduce((acc, cur) => {
  const [url, password] = cur.split(' ');
  acc.set(url, password);
  return acc;
}, new Map());
const urlList = input.slice(-M);

function solution() {
  const result = urlList.map((url) => passwordMap.get(url));

  console.log(result.join('\n'));
}

solution();
