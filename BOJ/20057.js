const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const board = input.map((row) => row.split(' ').map(Number));

const DIRECTION = {
  DOWN: 'DOWN',
  RIGHT: 'RIGHT',
  UP: 'UP',
  LEFT: 'LEFt',
};

const center = Math.floor(N / 2);
let [curRow, curCol] = [center, center];

let lostSand = 0;

function solution() {
  move();

  console.log(lostSand);
}

/** 왼쪽을 기준으로 잡고 회전하는 함수 */
function rotate(dr, dc, direction) {
  switch (direction) {
    // 아래로 90도 회전
    case DIRECTION.DOWN:
      return [-dc, dr];
    // 오른쪽으로 180도 회전(좌우 대칭)
    case DIRECTION.RIGHT:
      return [-dr, -dc];
    // 위로 90도 회전
    case DIRECTION.UP:
      return [dc, -dr];
    // 왼쪽 그대로
    default:
      return [dr, dc];
  }
}

/** 격자를 벗어나는지 판단하는 함수 */
function isValid(row, col) {
  return 0 <= row && row < N && 0 <= col && col < N;
}

/** 모래를 흩뿌리는 함수 */
function spreadSand(direction) {
  const curSand = board[curRow][curCol];
  let movedSand = 0;

  // 왼쪽 기준
  const baseSpread = [
    { dr: 0, dc: -2, rate: 0.05 },
    { dr: -1, dc: -1, rate: 0.1 },
    { dr: 1, dc: -1, rate: 0.1 },
    { dr: -1, dc: 0, rate: 0.07 },
    { dr: 1, dc: 0, rate: 0.07 },
    { dr: -2, dc: 0, rate: 0.02 },
    { dr: 2, dc: 0, rate: 0.02 },
    { dr: -1, dc: 1, rate: 0.01 },
    { dr: 1, dc: 1, rate: 0.01 },
  ];

  baseSpread.forEach(({ dr, dc, rate }) => {
    const [nr, nc] = rotate(dr, dc, direction);
    // 소수점 이하는 버린다.
    const amount = Math.floor(curSand * rate);

    movedSand += amount;

    if (isValid(curRow + nr, curCol + nc)) {
      board[curRow + nr][curCol + nc] += amount;
    } else {
      lostSand += amount;
    }
  });

  const [ar, ac] = rotate(0, -1, direction);
  const alphaSand = curSand - movedSand;

  if (isValid(curRow + ar, curCol + ac)) {
    board[curRow + ar][curCol + ac] += alphaSand;
  } else {
    lostSand += alphaSand;
  }

  board[curRow][curCol] = 0;
}

function move() {
  let step = 1;

  while (true) {
    // 왼쪽
    for (let j = 0; j < step; j++) {
      // 마지막에 맨 위에서 왼쪽으로 갈 때 (0, 0)에 도착하면 종료한다.
      if (curRow === 0 && curCol === 0) {
        return;
      }

      curCol--;
      spreadSand(DIRECTION.LEFT);
    }

    // 아래
    for (let i = 0; i < step; i++) {
      curRow++;
      spreadSand(DIRECTION.DOWN);
    }
    step++;

    // 오른쪽
    for (let j = 0; j < step; j++) {
      curCol++;
      spreadSand(DIRECTION.RIGHT);
    }
    // 위
    for (let i = 0; i < step; i++) {
      curRow--;
      spreadSand(DIRECTION.UP);
    }
    step++;
  }
}

solution();
