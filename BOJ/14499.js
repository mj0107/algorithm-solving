const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, x, y, K] = input.shift().split(' ').map(Number);
const map = input.slice(0, N).map((row) => row.split(' ').map(Number));
const orderList = input.pop().split(' ').map(Number);

const DIRECTION = {
  EAST: 1,
  WEST: 2,
  NORTH: 3,
  SOUTH: 4,
};

// 동, 서, 북, 남
const dr = [0, 0, 0, -1, 1];
const dc = [0, 1, -1, 0, 0];

class Dice {
  constructor() {
    //   2
    // 4 1 3
    //   5
    //   6
    this.dice = Array.from({ length: 7 }, () => 0);
  }

  getDiceState() {
    return {
      top: this.dice[6],
      bottom: this.dice[1],
      east: this.dice[3],
      west: this.dice[4],
      south: this.dice[5],
      north: this.dice[2],
    };
  }

  rollEast() {
    const { top, west, bottom, east } = this.getDiceState();

    this.dice[3] = top;
    this.dice[6] = west;
    this.dice[4] = bottom;
    this.dice[1] = east;
  }

  rollWest() {
    const { top, west, bottom, east } = this.getDiceState();

    this.dice[3] = bottom;
    this.dice[6] = east;
    this.dice[4] = top;
    this.dice[1] = west;
  }

  rollSouth() {
    const { top, bottom, south, north } = this.getDiceState();

    this.dice[2] = bottom;
    this.dice[1] = south;
    this.dice[5] = top;
    this.dice[6] = north;
  }

  rollNorth() {
    const { top, bottom, south, north } = this.getDiceState();

    this.dice[2] = top;
    this.dice[1] = north;
    this.dice[5] = bottom;
    this.dice[6] = south;
  }

  getTop() {
    return this.dice[6];
  }

  getBottom() {
    return this.dice[1];
  }

  setBottom(number) {
    this.dice[1] = number;
  }
}

function isValid(row, col) {
  return 0 <= row && row < N && 0 <= col && col < M;
}

function solution() {
  const dice = new Dice();
  const result = [];
  let [curRow, curCol] = [x, y];

  orderList.forEach((order) => {
    const nr = curRow + dr[order];
    const nc = curCol + dc[order];

    if (!isValid(nr, nc)) {
      return;
    }

    switch (order) {
      case DIRECTION.EAST:
        dice.rollEast();
        break;
      case DIRECTION.WEST:
        dice.rollWest();
        break;
      case DIRECTION.SOUTH:
        dice.rollSouth();
        break;
      case DIRECTION.NORTH:
        dice.rollNorth();
        break;
    }

    curRow = nr;
    curCol = nc;

    if (map[nr][nc] === 0) {
      map[nr][nc] = dice.getBottom();
    } else {
      dice.setBottom(map[nr][nc]);
      map[nr][nc] = 0;
    }

    result.push(dice.getTop());
  });

  console.log(result.join('\n'));
}

solution();
