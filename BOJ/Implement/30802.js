const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const countList = input.shift().split(' ').map(Number);
const [T, P] = input.shift().split(' ').map(Number);

function solution() {
  const bundleT = countList.reduce(
    (acc, cur) => acc + Math.floor((cur - 1) / T) + 1,
    0
  );
  const bundleP = Math.floor(N / P);
  const eachP = N % P;

  console.log(bundleT);
  console.log(bundleP, eachP);
}

solution();
