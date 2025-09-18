const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let [r, c, d] = input.shift().split(' ').map(Number);
const room = input.map((row) => row.split(' ').map(Number));

const EMPTY = 0;
const WALL = 1;
const CLEAR = 2;

// 북, 동, 남, 서
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

function isValid(row, col) {
  return 0 <= row && row < N && 0 <= col && col < M;
}

function isWall(row, col) {
  return room[row][col] === WALL;
}

function solution() {
  let count = 0;

  while (true) {
    // 1. 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소한다.
    if (room[r][c] === EMPTY) {
      room[r][c] = CLEAR;
      count++;
    }

    let isEmptyAroud = false;
    for (let d = 0; d < 4; d++) {
      const [nr, nc] = [r + dr[d], c + dc[d]];

      if (!isValid(nr, nc)) {
        continue;
      }

      if (room[nr][nc] === EMPTY) {
        isEmptyAroud = true;
        break;
      }
    }

    // 2. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 없는 경우,
    if (!isEmptyAroud) {
      const backDir = (d + 2) % 4;
      const [nr, nc] = [r + dr[backDir], c + dc[backDir]];

      // 바라보는 방향을 유지한 채로 한 칸 후진할 수 있다면 한 칸 후진하고 1번으로 돌아간다.
      if (isValid(nr, nc) && !isWall(nr, nc)) {
        [r, c] = [nr, nc];
        continue;
      } else {
        // 바라보는 방향의 뒤쪽 칸이 벽이라 후진할 수 없다면 작동을 멈춘다.
        break;
      }
    } else {
      // 3. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는 경우,
      // 1) 반시계 방향으로 90도 회전한다.
      d = (d + 3) % 4;
      // 2) 바라보는 방향을 기준으로 앞쪽 칸이 청소되지 않은 빈 칸인 경우 한 칸 전진한다.
      const [nr, nc] = [r + dr[d], c + dc[d]];
      if (room[nr][nc] === EMPTY) {
        [r, c] = [nr, nc];
      }
      // 3) 1번으로 돌아간다.
      continue;
    }
  }

  console.log(count);
}

solution();
