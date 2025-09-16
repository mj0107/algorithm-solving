const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, R] = input.shift().split(' ').map(Number);
const opList = input.pop().split(' ').map(Number);
let arr = input.map((row) => row.split(' ').map(Number));

/**
 * 1. 배열을 상하 반전시키는 함수이다.
 */
function flipUD() {
  const totalRow = arr.length;
  const result = [];

  for (let i = totalRow - 1; i >= 0; i--) {
    result.push([...arr[i]]);
  }

  arr = result;
}

/**
 * 2. 배열을 좌우 반전시키는 함수이다.
 */
function flipLR() {
  const totalRow = arr.length;
  const result = [];

  for (let i = 0; i < totalRow; i++) {
    result.push([...arr[i]].reverse());
  }

  arr = result;
}

/**
 * 3. 오른쪽으로 90도 회전시키는 함수이다.
 */
function rotateRight() {
  const totalRow = arr.length;
  const totalCol = arr[0].length;
  const result = [];

  for (let j = 0; j < totalCol; j++) {
    const row = [];
    for (let i = totalRow - 1; i >= 0; i--) {
      row.push(arr[i][j]);
    }
    result.push(row);
  }

  arr = result;
}

/**
 * 4. 왼쪽으로 90도 회전시키는 함수이다.
 */
function rotateLeft() {
  const totalRow = arr.length;
  const totalCol = arr[0].length;
  const result = [];

  for (let j = totalCol - 1; j >= 0; j--) {
    const row = [];
    for (let i = 0; i < totalRow; i++) {
      row.push(arr[i][j]);
    }
    result.push(row);
  }

  arr = result;
}

/**
 * 5, 6번 연산을 수행하려면 배열을 크기가 N/2×M/2인 4개의 부분 배열로 나눠야 한다.
 *
 * 5. 1번 그룹의 부분 배열을 2번 그룹 위치로, 2번을 3번으로, 3번을 4번으로, 4번을 1번으로 이동시키는 함수이다.
 */
function rotateQuadrantsClockwise() {
  const totalRow = arr.length;
  const totalCol = arr[0].length;
  const rowHalf = totalRow / 2;
  const colHalf = totalCol / 2;
  const result = Array.from({ length: totalRow }, () =>
    Array.from({ length: totalCol })
  );

  // 1번 그룹 -> 2번 그룹 위치로 이동
  for (let i = 0; i < rowHalf; i++) {
    for (let j = 0; j < colHalf; j++) {
      result[i][j + colHalf] = arr[i][j];
    }
  }

  // 2번 그룹 -> 3번 그룹 위치로 이동
  for (let i = 0; i < totalRow / 2; i++) {
    for (let j = colHalf; j < totalCol; j++) {
      result[i + rowHalf][j] = arr[i][j];
    }
  }

  // 3번 그룹 -> 4번 그룹 위치로 이동
  for (let i = rowHalf; i < totalRow; i++) {
    for (let j = colHalf; j < totalCol; j++) {
      result[i][j - colHalf] = arr[i][j];
    }
  }

  // 4번 그룹 -> 1번 그룹 위치로 이동
  for (let i = rowHalf; i < totalRow; i++) {
    for (let j = 0; j < colHalf; j++) {
      result[i - rowHalf][j] = arr[i][j];
    }
  }

  arr = result;
}

/**
 * 6. 1번 그룹의 부분 배열을 4번 그룹 위치로, 4번을 3번으로, 3번을 2번으로, 2번을 1번으로 이동시키는 함수이다.
 */
function rotateQuadrantsCounterClockwise() {
  const totalRow = arr.length;
  const totalCol = arr[0].length;
  const rowHalf = totalRow / 2;
  const colHalf = totalCol / 2;
  const result = Array.from({ length: totalRow }, () =>
    Array.from({ length: totalCol })
  );

  // 1번 그룹 -> 4번 그룹 위치로 이동
  for (let i = 0; i < rowHalf; i++) {
    for (let j = 0; j < colHalf; j++) {
      result[i + rowHalf][j] = arr[i][j];
    }
  }

  // 2번 그룹 -> 1번 그룹 위치로 이동
  for (let i = 0; i < rowHalf; i++) {
    for (let j = colHalf; j < totalCol; j++) {
      result[i][j - colHalf] = arr[i][j];
    }
  }

  // 3번 그룹 -> 2번 그룹 위치로 이동
  for (let i = rowHalf; i < totalRow; i++) {
    for (let j = colHalf; j < totalCol; j++) {
      result[i - rowHalf][j] = arr[i][j];
    }
  }

  // 4번 그룹 -> 3번 그룹 위치로 이동
  for (let i = rowHalf; i < totalRow; i++) {
    for (let j = 0; j < colHalf; j++) {
      result[i][j + colHalf] = arr[i][j];
    }
  }

  arr = result;
}

/**
 * 결과를 출력하는 함수이다.
 */
function printResult() {
  const result = arr.map((row) => row.join(' ')).join('\n');

  console.log(result);
}

function solution() {
  opList.forEach((op) => {
    switch (op) {
      case 1:
        flipUD();
        break;
      case 2:
        flipLR();
        break;
      case 3:
        rotateRight();
        break;
      case 4:
        rotateLeft();
        break;
      case 5:
        rotateQuadrantsClockwise();
        break;
      case 6:
        rotateQuadrantsCounterClockwise();
        break;
      default:
        break;
    }
  });

  printResult();
}

solution();
