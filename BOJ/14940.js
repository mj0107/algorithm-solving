const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const [n, m] = input.shift().split(' ').map(Number);
const map = input.map((row) => row.split(' ').map(Number));

const IMPOSSIBLE = 0;
const POSSIBLE = 1;
const GOAL = 2;

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const resultMap = Array.from({ length: n }, () => new Array(m).fill(-1));

function solution() {
  let [startRow, startCol] = getStartPosition();

  checkImpossible();
  bfs(startRow, startCol);
  printResultMap();
}

function getStartPosition() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === GOAL) {
        resultMap[i][j] = 0;
        return [i, j];
      }
    }
  }
}

function checkImpossible() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === IMPOSSIBLE) {
        resultMap[i][j] = 0;
      }
    }
  }
}

function bfs(startRow, startCol) {
  const queue = [[startRow, startCol, 0]];
  const visited = Array.from({ length: n }, () => new Array(m).fill(false));

  visited[startRow][startCol] = true;

  while (queue.length > 0) {
    const [curRow, curCol, curCount] = queue.shift();

    for (let d = 0; d < 4; d++) {
      const nr = curRow + dr[d];
      const nc = curCol + dc[d];

      if (!isValid(nr, nc)) {
        continue;
      }
      if (visited[nr][nc]) {
        continue;
      }
      if (map[nr][nc] === IMPOSSIBLE || map[nr][nc] === GOAL) {
        continue;
      }

      visited[nr][nc] = true;
      queue.push([nr, nc, curCount + 1]);
      resultMap[nr][nc] = curCount + 1;
    }
  }
}

function isValid(row, col) {
  return 0 <= row && row < n && 0 <= col && col < m;
}

function printResultMap() {
  console.log(resultMap.map((row) => row.join(' ')).join('\n'));
}

solution();
