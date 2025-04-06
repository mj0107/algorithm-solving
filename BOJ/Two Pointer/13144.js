const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const N = +input.shift();
const sequence = input.shift().split(' ').map(Number);

function solution() {
  const set = new Set();
  let left = 0;
  let right = 0;
  let result = 0;

  while (right < N) {
    // 중복된 수가 있는 경우
    while (set.has(sequence[right])) {
      set.delete(sequence[left]);
      left++;
    }

    // right - left + 1은 현재 부분 수열의 길이
    // 예: [1,2,3]이면 [3], [2,3], [1,2,3] 총 3개의 부분 수열이 가능
    result += right - left + 1;
    set.add(sequence[right]);
    right++;
  }

  console.log(result);
}

solution();
