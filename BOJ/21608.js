const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
let orderList = [];
const favoriteMap = input.reduce((acc, cur) => {
  const [myNumber, ...favoriteNumberList] = cur.split(' ').map(Number);
  orderList.push(myNumber);

  return acc.set(myNumber, favoriteNumberList);
}, new Map());
const classRoom = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => null)
);

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let candidatePosList = [];

function solution() {
  orderList.forEach((order) => {
    candidatePosList = [];

    findSeatWithMostFavoriteNeighbors(order);
    findSeatWithMostEmptyNeighbors();
    findSeatWithMinIndex();

    const [row, col] = candidatePosList[0];

    classRoom[row][col] = order;
  });

  const totalSatisfaction = getTotalSatisfaction();

  console.log(totalSatisfaction);
}

function isEmpty(row, col) {
  return !classRoom[row][col];
}

function isValid(row, col) {
  return 0 <= row && row < N && 0 <= col && col < N;
}

function getAdjFavoriteCount(row, col, number) {
  const favoriteNumberList = favoriteMap.get(number);
  let count = 0;

  for (let d = 0; d < 4; d++) {
    const nr = row + dr[d];
    const nc = col + dc[d];

    if (isValid(nr, nc) && favoriteNumberList.includes(classRoom[nr][nc])) {
      count++;
    }
  }

  return count;
}

function findSeatWithMostFavoriteNeighbors(number) {
  const adjFavoriteCountList = [];
  let maxAdjFavoriteCount = -Infinity;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (isEmpty(i, j)) {
        const adjFavoriteCount = getAdjFavoriteCount(i, j, number);

        maxAdjFavoriteCount = Math.max(maxAdjFavoriteCount, adjFavoriteCount);

        adjFavoriteCountList.push({ row: i, col: j, adjFavoriteCount });
      }
    }
  }

  adjFavoriteCountList.forEach(({ row, col, adjFavoriteCount }) => {
    if (adjFavoriteCount === maxAdjFavoriteCount) {
      candidatePosList.push([row, col]);
    }
  });
}

function findSeatWithMostEmptyNeighbors() {
  if (candidatePosList.length <= 1) {
    return;
  }

  const adjEmptyCountList = [];
  let maxAdjEmptyCount = -Infinity;

  candidatePosList.forEach(([row, col]) => {
    let adjEmptyCount = 0;

    for (let d = 0; d < 4; d++) {
      const nr = row + dr[d];
      const nc = col + dc[d];

      if (isValid(nr, nc) && isEmpty(nr, nc)) {
        adjEmptyCount++;
      }
    }

    adjEmptyCountList.push({ row, col, adjEmptyCount });
    maxAdjEmptyCount = Math.max(maxAdjEmptyCount, adjEmptyCount);
  });

  candidatePosList = adjEmptyCountList
    .filter(({ adjEmptyCount }) => adjEmptyCount === maxAdjEmptyCount)
    .map(({ row, col }) => [row, col]);
}

function findSeatWithMinIndex() {
  if (candidatePosList.length <= 1) {
    return;
  }

  candidatePosList.sort((pos1, pos2) => {
    const [row1, col1] = pos1;
    const [row2, col2] = pos2;

    if (row1 !== row2) {
      return row1 - row2;
    }

    return col1 - col2;
  });
}

function getTotalSatisfaction() {
  const satisfactionMap = new Map([
    [0, 0],
    [1, 1],
    [2, 10],
    [3, 100],
    [4, 1000],
  ]);
  let totalSatisfaction = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const curNumber = classRoom[i][j];
      const adjFavoriteCount = getAdjFavoriteCount(i, j, curNumber);
      const satisfaction = satisfactionMap.get(adjFavoriteCount);

      totalSatisfaction += satisfaction;
    }
  }

  return totalSatisfaction;
}

solution();
