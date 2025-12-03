const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const gearList = input.slice(0, 4).map((gear) => gear.split('').map(Number));
const K = +input[4];
const methodList = input.slice(5, 5 + K).map((method) => {
  const [gearNumber, direction] = method.split(' ').map(Number);

  return { gearNumber, direction };
});

const N = 0; // N극
const S = 1; // S극

const CLOCKWISE = 1; // 시계 방향
const COUNTERCLOCKWISE = -1; // 반시계 방향

const EAST = 2; // 동
const WEST = 6; // 서
const SOUTH = 4; // 남
const NORTH = 0; // 북

function solution() {
  methodList.forEach(({ gearNumber, direction }) => { rotate(gearNumber, direction) });

  const score = getScore();

  console.log(score);
}

// 톱니바퀴 A를 회전할 때, 그 옆에 있는 톱니바퀴 B와 서로 맞닿은 톱니의 극이 다르다면,
// B는 A가 회전한 방향과 반대방향으로 회전한다.
function rotate(gearNumber, direction) {
  const rotateList = Array.from({ length: 4 }, () => 0);
  rotateList[gearNumber - 1] = direction;

  // 왼쪽으로 가면서 회전방향을 결정한다.
  for (let i = gearNumber - 1; i > 0; i--) {
    if (gearList[i][WEST] !== gearList[i - 1][EAST]) {
      rotateList[i - 1] = rotateList[i] * -1;
    }
  }

  // 오른쪽으로 가면서 회전방향을 결정한다.
  for (let i = gearNumber - 1; i < 3; i++) {
    if (gearList[i][EAST] !== gearList[i + 1][WEST]) {
      rotateList[i + 1] = rotateList[i] * -1;
    }
  }

  // 위에서 구한 회전방향에 맞게 각 배열을 회전시킨다.
  for (let i = 0; i < 4; i++) {
    const rotateDirection = rotateList[i];

    if (rotateDirection === CLOCKWISE) {
      gearList[i].unshift(gearList[i].pop());
    } else if (rotateDirection === COUNTERCLOCKWISE) {
      gearList[i].push(gearList[i].shift());
    }
  }
}

function getScore() {
  let score = 0;

  for (let i = 0; i < 4; i++) {
    if (gearList[i][NORTH] === S) {
      score += 2 ** i;
    }
  }

  return score;
}

solution();