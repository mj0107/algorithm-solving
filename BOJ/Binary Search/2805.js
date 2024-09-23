const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const heightList = input.shift().split(' ').map(Number);

function solution() {
  const result = binarySearch();

  console.log(result);
}

/**
 * 이분탐색으로 절단기에 설정할 수 있는 높이의 최댓값을 구하는 함수이다.
 *
 * @returns 절단기에 설정할 수 있는 높이의 최댓값
 */
function binarySearch() {
  let left = 0;
  let right = Math.max(...heightList);
  let result = -Infinity;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const totalCutTreeLength = getTotalCutTreeLength(mid);

    // 만약 정확히 M미터의 나무를 집에 가져갈 수 있다면 바로 반환한다.
    if (totalCutTreeLength === M) {
      return mid;
    }

    if (totalCutTreeLength < M) {
      right = mid - 1;
    } else if (totalCutTreeLength > M) {
      left = mid + 1;

      // 정확히 M미터의 나무를 집에 가져갈 수 없는 경우에는,
      // 절단기에 설정할 수 있는 높이의 최댓값을 계속해서 갱신한다.
      result = Math.max(result, mid);
    }
  }

  // 위에서 정확히 M미터의 나무를 집에 가져갈 수 없을 경우,
  // 절단기에 설정할 수 있는 높이의 최댓값을 반환한다.
  return result;
}

/**
 * 절단기의 높이를 인자로 받아, 현재 절단기의 높이로 가져갈 수 있는 총 나무의 길이를 반환하는 함수이다.
 *
 * @param {number} cutterHeight 설정한 절단기의 높이
 * @returns 현재 설정한 절단기의 높이로 가져갈 수 있는 총 나무의 길이
 */
function getTotalCutTreeLength(cutterHeight) {
  let totalCutTreeLength = 0;

  for (const height of heightList) {
    if (height > cutterHeight) {
      totalCutTreeLength += height - cutterHeight;
    }
  }

  return totalCutTreeLength;
}

solution();
