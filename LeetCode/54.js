/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  let result = [];
  let [matrixRow, matrixCol] = [matrix.length, matrix[0].length];
  let [startRow, startCol] = [0, 0];
  let [endRow, endCol] = [matrix.length - 1, matrix[0].length - 1];

  let totalElementCount = matrixRow * matrixCol;
  while(true) {
      // result에 모두 담겼을 경우 반복문 탈출
      if(result.length === totalElementCount) {
          break;
      }

      // 왼쪽에서 오른쪽으로
      for(let col=startCol; col<=endCol; col+=1) {
          result.push(matrix[startRow][col]);
      }
      startRow += 1;

      // 위쪽에서 아래쪽으로
      for(let row=startRow; row<=endRow; row+=1) {
          result.push(matrix[row][endCol]);
      }
      endCol -= 1;

      // 마지막에 왼쪽에서 오른쪽으로 가서 중앙에서 끝날 경우,
      // 열이 1개라 아래로 쭉 가서 끝날경우
      if(startRow > endRow || startCol > endCol) {
          break;
      }

      // 오른쪽에서 왼쪽으로
      for(let col=endCol; col>=startCol; col-=1) {
          result.push(matrix[endRow][col]);
      }
      endRow -= 1;

      // 아래쪽에서 위쪽으로
      for(let row=endRow; row>=startRow; row-=1) {
          result.push(matrix[row][startCol]);
      }
      startCol += 1;
  }

  return result;
};