/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let rowList = [];
  let colList = [];

  for (let i = 0; i < grid.length; i += 1) {
    let row = '';
    let col = '';

    for (let j = 0; j < grid.length; j += 1) {
      row += `${grid[i][j]} `;
      col += `${grid[j][i]} `;
    }

    rowList.push(row);
    colList.push(col);
  }

  let result = 0;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid.length; j += 1) {
      if (rowList[i] === colList[j]) {
        result += 1;
      }
    }
  }

  return result;
};
