const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/** 테스트케이스 개수 */
const T = +input.shift();
/** 움직여야하는 칸 수 */
let count = 0;
/** 보드 한 변의 길이 */
let length = 0;
/** 체스판 */
let board = [];
/** 처음 나이트의 위치 */
let from = [];
/** 가야하는 나이트의 위치 */
let to = [];

const dr = [-1, -2, -2, -1, 1, 2, 2, 1];
const dc = [-2, -1, 1, 2, 2, 1, -1, -2];

const solution = () => {
  for (let i = 0; i < T; i++) {
    init();
    bfs();

    console.log(count);
  }
};

/**
 * 각 테스트케이스마다 필요한 변수를 초기화하는 함수
 */
const init = () => {
  count = 0;
  length = +input.shift();
  board = Array.from({ length }, () => Array.from({ length }, () => false));
  from = input.shift().split(' ').map(Number);
  to = input.shift().split(' ').map(Number);
};

/**
 * bfs로 걸린 이동한 최소 횟수를 구하는 함수
 */
const bfs = () => {
  let queue = [from];
  board[from[0]][from[1]] = true;

  while (queue.length > 0) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const [curRow, curCol] = queue.shift();

      // 해당 위치에 도달했다면 bfs를 종료한다.
      if (curRow === to[0] && curCol === to[1]) {
        return;
      }

      for (let d = 0; d < 8; d++) {
        const nr = curRow + dr[d];
        const nc = curCol + dc[d];

        // 유효한 위치가 아닐 경우 다음 반복을 진행한다.
        if (isValidIndex(nr, nc) === false) {
          continue;
        }
        // 이미 방문한 곳일경우 다음 반복을 진행한다.
        if (board[nr][nc] === true) {
          continue;
        }

        // 방문 처리를 한다.
        board[nr][nc] = true;
        queue.push([nr, nc]);
      }
    }

    count++;
  }
};

/**
 * 행과 열을 인자로 받아 해당 위치가 유효한 인덱스인지 판단하는 함수
 * 
 * @param {number} row 행
 * @param {number} col 열
 * @returns 범위안에 들어온다면 true, 아니라면 false를 반환한다.
 */
const isValidIndex = (row, col) => {
  if (row < 0 || row >= length) {
    return false;
  }
  if (col < 0 || col >= length) {
    return false;
  }

  return true;
};

solution();
