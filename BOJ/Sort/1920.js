/* 수 찾기 */
const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const A = input.shift().split(' ').map(Number);
const M = +input.shift();
const NUMBER_LIST = input.shift().split(' ').map(Number);

/**
 * 정렬된 A[]에 num이 있는지 이분탐색으로 찾아서 boolean 값으로 반환해주는 함수
 * 
 * @param {number[]} SORTED_A 정렬된 A[]
 * @param {number} num 찾을 수
 * @returns {boolean} 있다면 true, 없다면 false
 */
function isFound(SORTED_A, num) {
  let [start, end] = [0, N - 1];

  let mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (SORTED_A[mid] === num) {
      return true;
    } else if (SORTED_A[mid] < num) {
      start = mid + 1;
    } else if (SORTED_A[mid] > num) {
      end = mid - 1;
    }
  }

  return false;
}

function solution() {
  let result = [];
  const SORTED_A = [...A].sort((a, b) => a - b);

  NUMBER_LIST.forEach((num) => {
    result.push(isFound(SORTED_A, num) ? 1 : 0);
  });

  console.log(result.join('\n'));
}

solution();
