/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
const onesMinusZeros = (grid) => {
  let gridRow = grid.length;
  let gridCol = grid[0].length;

  let zerosCountRowList = grid.map(
    (row) => row.filter((el) => el === 0).length
  );
  let onesCountRowList = grid.map((_, idx) => gridCol - zerosCountRowList[idx]);
  let zerosCountColList = [];
  let onesCountColList = [];

  for (let j = 0; j < gridCol; j++) {
    let zeroCount = 0;
    for (let i = 0; i < gridRow; i++) {
      if (grid[i][j] === 0) {
        zeroCount++;
      }
    }
    zerosCountColList.push(zeroCount);
    onesCountColList.push(gridRow - zeroCount);
  }

  let diff = Array.from({ length: gridRow }, () =>
    Array.from({ length: gridCol })
  );
  for (let i = 0; i < gridRow; i++) {
    for (let j = 0; j < gridCol; j++) {
      diff[i][j] =
        onesCountRowList[i] +
        onesCountColList[j] -
        zerosCountRowList[i] -
        zerosCountColList[j];
    }
  }

  return diff;
};
