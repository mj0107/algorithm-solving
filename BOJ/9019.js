const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const T = +input.shift();

function solution() {
  for (let testCase = 1; testCase <= T; testCase++) {
    const [A, B] = input.shift().split(' ').map(Number);

    bfs(A, B);
  }
}

function bfs(A, B) {
  const queue = [[A, '']];
  const visited = Array(10000).fill(false);
  visited[A] = true;

  while (queue.length > 0) {
    const [cur, commandList] = queue.shift();

    if (cur === B) {
      console.log(commandList);
      return;
    }

    const nextStateList = [
      [D(cur), 'D'],
      [S(cur), 'S'],
      [L(cur), 'L'],
      [R(cur), 'R'],
    ];

    for (const [nextNumber, command] of nextStateList) {
      if (!visited[nextNumber]) {
        visited[nextNumber] = true;
        queue.push([nextNumber, commandList + command]);
      }
    }
  }
}

function D(number) {
  return (number * 2) % 10000;
}

function S(number) {
  return number === 0 ? 9999 : number - 1;
}

function L(number) {
  const d1 = Math.floor(number / 1000);
  return (number % 1000) * 10 + d1;
}

function R(number) {
  const d4 = number % 10;
  return Math.floor(number / 10) + d4 * 1000;
}

solution();
