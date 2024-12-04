const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
}).on('close', () => {
  solution();
  process.exit(0);
});

const EMPTY = 0;
const DESTROYER = 1;

let n, m;
let board = [];
let l1, r1;
let l2, r2;

function solution() {
  init();
  attack(l1, r1);
  attack(l2, r2);
  const destroyerCount = getDestroyerCount();

  console.log(destroyerCount);
}

function init() {
  [n, m] = input[0];
  board = input.slice(1, n + 2);
  [l1, r1] = input[input.length - 2];
  [l2, r2] = input[input.length - 1];
}

function attack(l, r) {
  for (let i = l - 1; i < r; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === DESTROYER) {
        board[i][j] = EMPTY;
        break;
      }
    }
  }
}

function getDestroyerCount() {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === DESTROYER) {
        count++;
      }
    }
  }

  return count;
}
