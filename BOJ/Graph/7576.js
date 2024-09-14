const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const box = input.map((row) => row.split(' ').map(Number));

const RIPE = 1;
const UNRIPE = 0;
const EMPTY = -1;

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function solution() {
  const ripeTomatoPositionList = getRipeTomatoPositionList();
  const days = bfs(ripeTomatoPositionList);

  const result = isAllTomatoRipe() ? days : -1;

  console.log(result);
}

/**
 * 익은 토마토의 위치 리스트를 반환하는 함수이다.
 *
 * @returns 익은 토마토의 위치 리스트를 반환한다.
 */
function getRipeTomatoPositionList() {
  const ripeTomatoPositionList = [];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (box[i][j] === RIPE) {
        ripeTomatoPositionList.push([i, j]);
      }
    }
  }

  return ripeTomatoPositionList;
}

/**
 * 너비 우선 탐색을 이용하여 모든 토마토가 익는데 걸린 일 수를 반환하는 함수이다.
 *
 * @param {number} ripeTomatoPositionList 익은 토마토의 위치 리스트
 * @returns 모든 토마토가 익는데 걸린 일 수를 반환한다.
 */
function bfs(ripeTomatoPositionList) {
  const queue = [...ripeTomatoPositionList.map((pos) => [...pos])];

  let days = -1;
  let index = 0;
  while (index < queue.length) {
    days++;

    const size = queue.length - index;
    for (let i = 0; i < size; i++) {
      // const [curRow, curCol] = queue.shift();
      // 위와 같이 하게 되면 시간초과가 나기 때문에, shift() 사용을 자제하고 index로 접근한다.
      const [curRow, curCol] = queue[index++];

      for (let d = 0; d < 4; d++) {
        const nr = curRow + dr[d];
        const nc = curCol + dc[d];

        if (!isValid(nr, nc)) {
          continue;
        }
        if (box[nr][nc] !== UNRIPE) {
          continue;
        }

        queue.push([nr, nc]);
        box[nr][nc] = RIPE;
      }
    }
  }

  return days;
}

/**
 * 인자로 받은 행과 열의 위치가 범위를 벗어나지 않는지 판별하는 함수이다.
 *
 * @param {number} row 행
 * @param {number} col 열
 * @returns 범위 안의 위치라면 true, 벗어났다면 false를 반환한다.
 */
function isValid(row, col) {
  return 0 <= row && row < M && 0 <= col && col < N;
}

/**
 * 모든 토마토가 익었는지 판별하는 함수이다.
 *
 * @returns 모든 토마토가 익었다면 true, 아니라면 false를 반환한다.
 */
function isAllTomatoRipe() {
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (box[i][j] === UNRIPE) {
        return false;
      }
    }
  }

  return true;
}

solution();
