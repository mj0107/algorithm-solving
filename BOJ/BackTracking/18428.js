const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const hallway = input.map((row) => row.split(' ').map((el) => el.trim()));
/** 선생님이 있는 위치를 담는 배열 */
let teacherPosList = [];

/** 상, 하, 좌, 우 */
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const state = {
  STUDENT: 'S',
  TEACHER: 'T',
  OBSTACLE: 'O',
  EMPTY: 'X',
};

let flag = false;

const solution = () => {
  getTeacherPosList();
  setUpObstacles(0);

  console.log(flag ? 'YES' : 'NO');
};

/**
 * 선생님이 있는 위치를 담는 배열을 구하는 함수
 */
const getTeacherPosList = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (hallway[i][j] === state.TEACHER) {
        teacherPosList.push([i, j]);
      }
    }
  }
};

/**
 * DFS, backtracking으로 장애물을 설치하고, 그 때 가능한 조합인지 판단하는 함수
 *
 * @param {number} count 장애물의 개수
 * @returns
 */
const setUpObstacles = (count) => {
  // 장애물이 3개일 경우,
  if (count === 3) {
    // 감시가 가능한지 판단한다.
    let result = isPossibleWatch();
    // 감시가 불가능할 경우,
    if (result === false) {
      // flag를 true로 바꾼다.
      flag = true;
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (hallway[i][j] !== state.EMPTY) {
        continue;
      }

      // 장애물을 설치하고,
      hallway[i][j] = state.OBSTACLE;
      // 장애물의 개수를 하나 더한뒤 다음 재귀로 넘어간다.
      setUpObstacles(count + 1);
      // 다른 조합을 위해 장애물을 제거한다.
      hallway[i][j] = state.EMPTY;
    }
  }
};

/**
 * 현재 설치된 장애물의 상태로 감시가 가능한지 판단하는 함수
 *
 * @returns 감시가 가능하다면 true, 아니라면 false를 반환한다.
 */
const isPossibleWatch = () => {
  for (const [row, col] of teacherPosList) {
    for (let i = 0; i < 4; i++) {
      let nr = row;
      let nc = col;

      while (true) {
        nr += dr[i];
        nc += dc[i];

        if (isValidIndex(nr, nc) === false) {
          break;
        }
        if (hallway[nr][nc] === state.STUDENT) {
          return true;
        }
        if (hallway[nr][nc] === state.OBSTACLE) {
          break;
        }
      }
    }
  }

  return false;
};

/**
 * 인자로 받은 행, 열이 범위를 벗어나는지 판단하는 함수
 *
 * @param {number} row 행
 * @param {number} col 열
 * @returns 범위를 벗어나지 않는다면 true, 벗어난다면 false를 반환한다.
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
