const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// N: 컨베이어 벨트 길이, K: 내구도가 0인 칸의 개수가 K개 이상이라면 종료
const [N, K] = input.shift().split(' ').map(Number);
const conveyorBelt = input
  .shift()
  .split(' ')
  .map((durability) => ({ durability: +durability, hasRobot: false }));

const liftUpPoint = 0;
const dropPoint = N - 1;

let step = 0;
let zeroDurabilityCount = conveyorBelt.filter(
  ({ durability }) => durability === 0
).length;

function solution() {
  while (zeroDurabilityCount < K) {
    step++;

    rotate();
    moveRobot();
    liftUpRobot();
  }

  console.log(step);
}

// 1. 벨트가 각 칸 위에 있는 로봇과 함께 회전한다.
function rotate() {
  conveyorBelt.unshift(conveyorBelt.pop());

  // 하차지점에 로봇이 있다면, 로봇을 내린다.
  if (conveyorBelt[dropPoint].hasRobot) {
    conveyorBelt[dropPoint].hasRobot = false;
  }
}

// 2. 가장 먼저 벨트에 올라간 로봇부터, 벨트가 회전하는 방향으로 한 칸 이동할 수 있다면 이동한다.
//    이동할 수 없다면 가만히있는다.
//    1) 로봇이 이동하기 위해서는 이동하려는 칸에 로봇이 없어야한다. 그 칸의 내구도가 1 이상 남아 있어야 한다.
function moveRobot() {
  for (let i = dropPoint - 1; i >= liftUpPoint; i--) {
    const { hasRobot: curHasRobot } = conveyorBelt[i];
    const { durability: nextDurability, hasRobot: nextHasRobot } =
      conveyorBelt[i + 1];

    if (curHasRobot && nextDurability > 0 && !nextHasRobot) {
      conveyorBelt[i].hasRobot = false;
      conveyorBelt[i + 1].hasRobot = true;
      conveyorBelt[i + 1].durability--;

      if (conveyorBelt[i + 1].durability === 0) {
        zeroDurabilityCount++;
      }
    }
  }

  // 하차지점에 로봇이 있다면, 로봇을 내린다.
  if (conveyorBelt[dropPoint].hasRobot) {
    conveyorBelt[dropPoint].hasRobot = false;
  }
}

// 3. 올리는 위치에 있는 칸의 내구도가 0이 아니면 올리는 위치에 로봇을 올린다.
function liftUpRobot() {
  if (conveyorBelt[liftUpPoint].durability === 0) {
    return;
  }

  conveyorBelt[liftUpPoint].hasRobot = true;
  conveyorBelt[liftUpPoint].durability--;

  if (conveyorBelt[liftUpPoint].durability === 0) {
    zeroDurabilityCount++;
  }
}

solution();
