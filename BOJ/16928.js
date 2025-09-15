const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

let index = 0;
const [N, M] = input[index++].split(' ').map(Number);
const ladderInfoList = input
  .slice(index, index + N)
  .map((info) => info.split(' ').map(Number));
const snakeInfoList = input
  .slice(-M)
  .map((info) => info.split(' ').map(Number));

const MAX = 100;
const board = Array.from({ length: MAX + 1 }, () => 0);

function solution() {
  initBoard();
  const minMoveCount = getMinMoveCount();

  console.log(minMoveCount);
}

function initBoard() {
  ladderInfoList.forEach(([x, y]) => (board[x] = y));
  snakeInfoList.forEach(([u, v]) => (board[u] = v));
}

function getMinMoveCount() {
  // [현재 위치, 이동 횟수]
  const queue = [[1, 0]];
  const visited = Array.from({ length: MAX + 1 }, () => false);

  visited[1] = true;

  while (queue.length > 0) {
    const [curNumber, curMoveCount] = queue.shift();

    if (curNumber === MAX) {
      return curMoveCount;
    }

    for (let dice = 1; dice <= 6; dice++) {
      let nextNumber = curNumber + dice;

      if (nextNumber > 100) {
        break;
      }

      // 만약 사다리나 뱀이 설치된 곳이라면,
      // 그것을 이용해서 갈 수 있는 다음칸으로 값을 갱신한다.
      if (board[nextNumber] !== 0) {
        nextNumber = board[nextNumber];
      }

      if (visited[nextNumber]) {
        continue;
      }

      visited[nextNumber] = true;
      queue.push([nextNumber, curMoveCount + 1]);
    }
  }
}

solution();
