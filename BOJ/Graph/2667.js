const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const map = input.map((row) => row.split('').map(Number));
const visited = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const state = { EMPTY: 0, HOME: 1 };

/** 한 단지에 속하는 집의 개수 */
let houseCount = 0;
/** 단지별 집의 개수를 저장하는 배열 */
let result = [];

const solution = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 빈곳이면 넘어간다.
      if (map[i][j] === state.EMPTY) {
        continue;
      }
      // 이미 방문한 곳이면 넘어간다.
      if (visited[i][j] === true) {
        continue;
      }

      // 단지별 집의 개수를 세기 위해 초기화해준다.
      houseCount = 0;
      dfs(i, j);
      result.push(houseCount);
    }
  }

  console.log(result.length);
  console.log(result.sort((a, b) => a - b).join('\n'));
};

/**
 * dfs로 단지별 집의 개수를 세는 함수
 * 
 * @param {number} row 행
 * @param {number} col 열
 */
const dfs = (row, col) => {
  // 방문처리를 해준다.
  visited[row][col] = true;
  houseCount++;

  for (let d = 0; d < 4; d++) {
    const nr = row + dr[d];
    const nc = col + dc[d];

    // 범위를 벗어난다면 넘어간다.
    if (isValidIndex(nr, nc) === false) {
      continue;
    }
    // 빈곳이라면 넘어간다.
    if (map[nr][nc] === state.EMPTY) {
      continue;
    }
    // 이미 방문한 곳이라면 넘어간다.
    if (visited[nr][nc] === true) {
      continue;
    }

    dfs(nr, nc);
  }
};

/**
 * 인자로 받은 행과 열이 범위내의 인덱스인지 판단해서 반환하는 함수
 * 
 * @param {number} row 행
 * @param {number} col 열
 * @returns 범위내에 속한다면 true, 아니라면 false를 반환한다.
 */
const isValidIndex = (row, col) => {
  if (row < 0 || row >= N) {
    return false;
  }
  if (col < 0 || col >= N) {
    return false;
  }

  return true;
};

solution();
