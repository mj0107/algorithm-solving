const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let index = 0;
const [N, S] = input[index++].split(' ').map(Number);
const sequence = input[index].split(' ').map(Number);

function solution() {
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  let result = Infinity;

  // 최소 길이 구하기
  while (right < N) {
    if (sum >= S) {
      result = Math.min(result, right - left + 1);
      sum = sum - sequence[left];
      left++;
    } else if (sum < S) {
      right++;
      sum = sum + sequence[right];
    }
  }

  // 남은 수열에서 최소 길이 구하기
  while (left < N && sum >= S) {
    result = Math.min(result, right - left);
    sum = sum - sequence[left];
    left++;
  }

  console.log(result === Infinity ? 0 : result);
}

solution();
