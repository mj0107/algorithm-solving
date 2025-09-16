const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N, K, L;
const snakeDirInfo = [];
let snakeDirInfoIndex = 0;

const APPLE = 1;
const EMPTY = 0;
const SNAKE = -1;
let board;

// 상, 우, 하, 좌
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

function init() {
  N = +input.shift();
  K = +input.shift();

  board = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => EMPTY)
  );

  for (let i = 0; i < K; i++) {
    const [row, col] = input.shift().split(' ').map(Number);
    board[row - 1][col - 1] = APPLE;
  }

  L = +input.shift();

  for (let i = 0; i < L; i++) {
    const [X, C] = input.shift().split(' ');
    snakeDirInfo.push([+X, C]);
  }
}

function isValid(row, col) {
  return 0 <= row && row < N && 0 <= col && col < N;
}

function isValid(row, col) {
  if (row < 0 || row >= N) {
    return false;
  }
  if (col < 0 || col >= N) {
    return false;
  }

  return true;
}

function play() {
  const queue = [[0, 0]];
  let curDir = 1; // 뱀은 처음에 오른쪽을 향한다.
  let seconds = 0;

  board[0][0] = SNAKE;

  while (true) {
    seconds++;

    const [headRow, headCol] = queue.at(-1);
    const [tailRow, tailCol] = queue[0];
    const [nr, nc] = [headRow + dr[curDir], headCol + dc[curDir]];

    // 벽에 부딪히면 게임을 종료한다.
    if (!isValid(nr, nc)) {
      return seconds;
    }

    // 뱀이 자기 몸에 부딪히면 게임을 종료한다.
    if (board[nr][nc] === SNAKE) {
      return seconds;
    } else if (board[nr][nc] === APPLE) {
      // 만약 이동한 칸에 사과가 있다면, 그 칸에 있던 사과가 없어지고 꼬리는 움직이지 않는다.
      board[nr][nc] = SNAKE;
    } else {
      // 만약 이동한 칸에 사과가 없다면, 몸 길이를 줄여서 꼬리가 위치한 칸을 비워준다. 즉, 몸 길이는 변하지 않는다.
      board[nr][nc] = SNAKE;
      board[tailRow][tailCol] = EMPTY;
      queue.shift();
    }

    queue.push([nr, nc]);

    // 방향 전환 정보가 있으면 방향 전환한다.
    if (snakeDirInfoIndex < snakeDirInfo.length) {
      const [X, C] = snakeDirInfo[snakeDirInfoIndex];

      // 방향 전환 시간이 되면 방향 전환한다.
      if (X === seconds) {
        if (C === 'L') {
          // 왼쪽으로 방향 전환한다.
          curDir = curDir - 1 < 0 ? 3 : curDir - 1;
        } else if (C === 'D') {
          // 오른쪽으로 방향 전환한다.
          curDir = (curDir + 1) % 4;
        }
        // 다음 방향 전환 정보 인덱스를 증가시킨다.
        snakeDirInfoIndex++;
      }
    }
  }
}

function solution() {
  init();
  const seconds = play();

  console.log(seconds);
}

solution();
