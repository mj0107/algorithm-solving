const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

const EMPTY = 0; // 빈 밭
const CABBAGE = 1; // 배추
const EARTHWORM = 2; // 지렁이

/** 상, 하, 좌, 우  */
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function solution() {
  const result = [];

  for (let testCase = 0; testCase < T; testCase++) {
    const [M, N, K] = input.shift().split(' ').map(Number);
    const field = Array.from({ length: M }, () => new Array(N).fill(EMPTY));
    const cabbagePositionList = getCabbagePositionList(K, field);
    const earthWormCount = getEarthWormCount(cabbagePositionList, field);

    result.push(earthWormCount);
  }

  console.log(result.join('\n'));
}

/**
 * 배추가 심어져 있는 위치를 담은 리스트를 반환하는 함수이다.
 *
 * @param {number} K 배추가 심어져 있는 위치의 개수
 * @param {number[][]} field 밭
 * @returns 배추가 심어져 있는 위치를 담은 리스트를 반환한다.
 */
function getCabbagePositionList(K, field) {
  const cabbagePositionList = [];

  for (let i = 0; i < K; i++) {
    const [row, col] = input.shift().split(' ').map(Number);

    field[row][col] = CABBAGE;
    cabbagePositionList.push([row, col]);
  }

  return cabbagePositionList;
}

/**
 * 필요한 배추흰지렁이의 마리수를 세어 반환하는 함수이다.
 *
 * @param {number[][]} cabbagePositionList 배추가 심어져 있는 위치를 담은 리스트
 * @param {number[][]} field 밭
 * @returns 필요한 배추흰지렁이의 마리수를 반환한다.
 */
function getEarthWormCount(cabbagePositionList, field) {
  let earthWormCount = 0;

  for (const [row, col] of cabbagePositionList) {
    if (field[row][col] === CABBAGE) {
      bfs(row, col, field);
      earthWormCount++;
    }
  }

  return earthWormCount;
}

/**
 * 인자로 받은 행과 열의 위치가 밭을 벗어나지 않는지 판단하는 함수이다.
 *
 * @param {number} row 행
 * @param {number} col 열
 * @param {number[][]} field 밭
 * @returns 유효한 위치라면 true, 유효하지 않은 위치라면 false를 반환한다.
 */
function isValid(row, col, field) {
  return 0 <= row && row < field.length && 0 <= col && col < field[0].length;
}

/**
 * 너비 우선 탐색으로 배추흰지렁이가 해충으로부터 보호할 수 있는 구역을 구하는 함수이다.
 *
 * @param {number} startRow 시작 행
 * @param {number} startCol 시작 열
 * @param {number[][]} field 밭
 */
function bfs(startRow, startCol, field) {
  const queue = [[startRow, startCol]];
  field[startRow][startCol] = EARTHWORM;

  while (queue.length) {
    const [curRow, curCol] = queue.shift();

    for (let d = 0; d < 4; d++) {
      const nr = curRow + dr[d];
      const nc = curCol + dc[d];

      if (!isValid(nr, nc, field)) {
        continue;
      }
      if (field[nr][nc] !== CABBAGE) {
        continue;
      }

      field[nr][nc] = EARTHWORM;
      queue.push([nr, nc]);
    }
  }
}

solution();
