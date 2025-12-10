const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// N: 격자 한 변의 길이, M: 정보의 개수, K: 이동 명령의 개수
const [N, M, K] = input.shift().split(' ').map(Number);
// N * N 격자
let board = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => new Array())
);
// 정보가 담겨있는 리스트
const infoList = input.map((line) => {
  const [row, col, mass, speed, direction] = line.split(' ').map(Number);

  return { row: row - 1, col: col - 1, mass, speed, direction };
});

//          ↑   ↗   →  ↘  ↓  ↙  ←   ↖
const dr = [-1, -1, 0, 1, 1, 1, 0, -1];
const dc = [0, 1, 1, 1, 0, -1, -1, -1];

function solution() {
  init();

  for (let moveCount = 1; moveCount <= K; moveCount++) {
    move();
    divide();
  }

  const totalMass = getTotalMass();

  console.log(totalMass);
}

/** 파이어볼의 정보에 따라 격자를 초기화하는 함수 */
function init() {
  infoList.forEach((info) => {
    board[info.row][info.col].push(info);
  });
}

/** 모든 파이어볼을 이동시키는 함수 */
function move() {
  const nextBoard = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => new Array())
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 만약 해당 칸에 파이어볼이 없다면 넘어간다.
      if (board[i][j].length === 0) {
        continue;
      }

      board[i][j].forEach((info) => {
        const { row, col, speed, direction } = info;
        // 음수가 나올 수 있기 때문에, 마지막에 N을 더해주고 한번 더 모듈러 연산을 취한다.
        const nr = (((row + dr[direction] * speed) % N) + N) % N;
        const nc = (((col + dc[direction] * speed) % N) + N) % N;

        // 새로운 좌표값으로 갱신해준다.
        nextBoard[nr][nc].push({ ...info, row: nr, col: nc });
      });
    }
  }

  board = nextBoard;
}

function divide() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const cur = board[i][j];
      let totalMass = 0;
      let totalSpeed = 0;

      // 2개 이상의 파이어볼이 있는 칸에서만 진행한다.
      if (cur.length >= 2) {
        let isAllOddDirection = true;
        let isAllEvenDirection = true;

        cur.forEach(({ mass, speed, direction }) => {
          if (direction % 2 === 0) {
            isAllOddDirection = false;
          } else {
            isAllEvenDirection = false;
          }

          totalMass += mass;
          totalSpeed += speed;
        });

        const isAllSameParity = isAllOddDirection || isAllEvenDirection;
        const newMass = Math.floor(totalMass / 5);
        const newSpeed = Math.floor(totalSpeed / cur.length);

        // 질량이 0인 파이어볼은 소멸시켜서 빈배열로 만들어준다.
        if (newMass === 0) {
          board[i][j] = [];
        }

        if (newMass > 0) {
          // 합쳐지는 파이어볼의 방향이 모두 홀수이거나 모두 짝수이면, 방향은 0, 2, 4, 6이 되고,
          // 그렇지 않으면 1, 3, 5, 7이 된다.
          const newDirectionList = isAllSameParity
            ? [0, 2, 4, 6]
            : [1, 3, 5, 7];

          board[i][j] = newDirectionList.map((direction) => ({
            row: i,
            col: j,
            mass: newMass,
            speed: newSpeed,
            direction,
          }));
        }
      }
    }
  }
}

function getTotalMass() {
  let totalMass = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j].length === 0) {
        continue;
      }

      totalMass += board[i][j].reduce((acc, cur) => acc + cur.mass, 0);
    }
  }

  return totalMass;
}

solution();
