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

const EMPTY = 'O';
const WALL = 'X';
const DOYEON = 'I';
const PERSON = 'P';
const NO_MEET = 'TT';

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const campus = input.map((row) => row.split(''));

function solution() {
  const { firstRow, firstCol } = getDoyeonFirstPos();
  const meetPersonCount = getMeetPersonCount(firstRow, firstCol);

  const result = meetPersonCount === 0 ? NO_MEET : meetPersonCount;
  console.log(result);
}

/**
 * 도연이의 처음 위치를 구하는 함수이다.
 *
 * @returns {object} - { firstRow, firstCol }
 */
function getDoyeonFirstPos() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (campus[i][j] === DOYEON) {
        return { firstRow: i, firstCol: j };
      }
    }
  }
}

/**
 * BFS를 이용해 도연이가 만난 사람 수를 구하는 함수이다.
 *
 * @param {number} firstRow - 도연이의 처음 위치의 행
 * @param {number} firstCol - 도연이의 처음 위치의 열
 * @returns {number} - 도연이가 만난 사람 수
 */
function getMeetPersonCount(firstRow, firstCol) {
  const queue = [[firstRow, firstCol]];
  const visited = Array.from({ length: N + 1 }, () =>
    new Array(M + 1).fill(false)
  );
  let meetPersonCount = 0;

  visited[firstRow][firstCol] = true;

  while (queue.length > 0) {
    const [curRow, curCol] = queue.shift();

    if (campus[curRow][curCol] === PERSON) {
      meetPersonCount++;
    }

    for (let d = 0; d < 4; d++) {
      const nr = curRow + dr[d];
      const nc = curCol + dc[d];

      if (!isValid(nr, nc)) {
        continue;
      }
      if (visited[nr][nc]) {
        continue;
      }
      if (campus[nr][nc] === WALL) {
        continue;
      }

      visited[nr][nc] = true;
      queue.push([nr, nc]);
    }
  }

  return meetPersonCount;
}

/**
 * 인자로 받은 행과 열이 범위내에 있는지 판단하는 함수이다.
 *
 * @param {number} row - 행
 * @param {number} col - 열
 * @returns {boolean} 범위내에 있으면 true, 그렇지 않으면 false를 반환한다.
 */
function isValid(row, col) {
  return 0 <= row && row < N && 0 <= col && col < M;
}

solution();
