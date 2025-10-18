const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const obstaclePosList = input.slice(0, N).map((row) => row.split(' ').map(Number));
const commandList = input.pop();

const EMPTY = 0;
const OBSTACLE = 1;

const board = Array.from({ length: 1001 }, () => Array.from({ length: 1001 }, () => EMPTY));

function initBoard() {
  obstaclePosList.forEach(([x, y]) => {
    board[y + 500][x + 500] = OBSTACLE;
  });
}

function isValid(y, x) {
  return 0 <= y && y <= 1000 && 0 <= x && x <= 1000;
}

function solution() {
  let [curY, curX] = [500, 500];

  initBoard();

  [...commandList].forEach((command) => {
    let [ny, nx] = [curY, curX];

    switch (command) {
      case 'U':
        ny++;
        break;
      case 'D':
        ny--;
        break;
      case 'R':
        nx++;
        break;
      case 'L':
        nx--;
        break;
    }

    if (!isValid(ny, nx)) {
      return;
    }
    if (board[ny][nx] === OBSTACLE) {
      return;
    }

    [curY, curX] = [ny, nx];
  });

  console.log(curX - 500, curY - 500);
}

solution();