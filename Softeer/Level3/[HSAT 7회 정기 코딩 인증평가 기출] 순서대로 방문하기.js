const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line.split(' ').map(Number));
}).on('close', () => {
  solution();
  process.exit(0);
});

let n, m;
const board = [];
const posList = [];

const EMPTY = 0;
const WALL = 1;

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let visited;

let result = 0;

function solution() {
  init();

  const [startRow, startCol] = posList[0];
  visited[startRow][startCol] = 1;
  go(startRow, startCol, 1);

  console.log(result);
}

function init() {
  let index = 0;

  [n, m] = lines[index++];

  for (let i = 0; i < n; i++) {
    board.push(lines[index++]);
  }

  for (let i = 0; i < m; i++) {
    const [row, col] = lines[index++];

    posList.push([row - 1, col - 1]);
  }

  visited = Array.from({ length: n }, () => Array(n).fill(0));
}

function go(curRow, curCol, count) {
  if (count === m && checkOrder()) {
    result++;
    return;
  }

  for (let d = 0; d < 4; d++) {
    const nr = curRow + dr[d];
    const nc = curCol + dc[d];

    if (!isValid(nr, nc)) {
      continue;
    }
    if (visited[nr][nc] > 0) {
      continue;
    }
    if (board[nr][nc] === WALL) {
      continue;
    }

    let newCount = count;

    if (nr === posList[count][0] && nc === posList[count][1]) {
      newCount++;
    }

    visited[nr][nc] = newCount;
    go(nr, nc, newCount);
    visited[nr][nc] = 0;
  }
}

function isValid(row, col) {
  return 0 <= row && row < n && 0 <= col && col < n;
}

function checkOrder() {
  const [startRow, startCol] = posList[0];
  let prevCount = visited[startRow][startCol];
  let curCount;

  for (let i = 1; i < posList.length; i++) {
    const [curRow, curCol] = posList[i];

    curCount = visited[curRow][curCol];

    if (prevCount >= curCount) {
      return false;
    }

    prevCount = curCount;
  }

  return true;
}
