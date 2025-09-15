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
const map = input.map((row) => row.split('').map(Number));

const EMPTY = 0;
const WALL = 1;

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function solution() {
  const result = bfs();

  console.log(result);
}

function bfs() {
  const queue = [[0, 0, 1, 0]];
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array(2).fill(false))
  );

  visited[0][0][0] = true;

  let queueIndex = 0;
  while (queueIndex < queue.length) {
    const [curRow, curCol, curCount, broken] = queue[queueIndex++];

    if (curRow === N - 1 && curCol === M - 1) {
      return curCount;
    }

    for (let d = 0; d < 4; d++) {
      const nr = curRow + dr[d];
      const nc = curCol + dc[d];

      if (!isValid(nr, nc)) {
        continue;
      }

      // 갈 수 있는 곳 일 때,
      if (map[nr][nc] === EMPTY) {
        if (!visited[nr][nc][broken]) {
          queue.push([nr, nc, curCount + 1, broken]);
          visited[nr][nc][broken] = true;
        }
        // 벽이지만, 아직 벽을 부순 적이 없을 경우,
      } else if (map[nr][nc] === WALL && broken === 0) {
        if (!visited[nr][nc][1]) {
          queue.push([nr, nc, curCount + 1, 1]);
          visited[nr][nc][1] = true;
        }
      }
    }
  }

  return -1;
}

function isValid(row, col) {
  return 0 <= row && row < N && 0 <= col && col < M;
}

solution();
