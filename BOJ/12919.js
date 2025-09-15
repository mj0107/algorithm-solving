const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [S, T] = input.map((el) => el.trim());

const IMPOSSIBLE = 0;
const POSSIBLE = 1;

let result = IMPOSSIBLE;

function solution() {
  makeS(T);

  console.log(result);
}

function makeS(current) {
  if (current.length === S.length) {
    if (current === S) {
      result = POSSIBLE;
    }
    return;
  }

  if (current.endsWith('A')) {
    makeS(current.slice(0, -1));
  }
  if (current.startsWith('B')) {
    makeS([...current].reverse().slice(0, -1).join(''));
  }
}

solution();
