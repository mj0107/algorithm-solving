/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let [row, col] = [0, matrix[0].length - 1];

  let cur = 0;
  while (row < matrix.length && col >= 0) {
    cur = matrix[row][col];

    if (cur === target) {
      return true;
    }
    if (cur < target) {
      row += 1;
    }
    if (cur > target) {
      col -= 1;
    }
  }

  return false;
};
