const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const [N, K] = input.shift().split(' ').map(Number);
const sequence = input.shift().split(' ').map(Number);

function solution() {
  let left = 0;
  let right = 0;
  let removeCount = 0; // 제거한 홀수의 개수
  let result = 0;

  while (right < N) {
    // 짝수일 경우
    if (sequence[right] % 2 === 0) {
      result = Math.max(result, right - left - removeCount + 1);
      right++;
    } else {
      // 홀수일 경우
      // 제거한 홀수의 개수가 K보다 작으면 제거한 홀수의 개수를 증가시키고 포인터를 오른쪽으로 이동
      if (removeCount < K) {
        removeCount++;
        right++;
      } else {
        // 더 이상 제거할 수 없으면 왼쪽 포인터를 오른쪽으로 이동
        while (removeCount === K) {
          // 왼쪽 포인터가 가리키는 수가 홀수일 경우
          // 제거한 홀수의 개수를 줄이고 왼쪽 포인터 한 칸 오른쪽으로 이동
          if (sequence[left] % 2 === 1) {
            removeCount--;
          }
          left++;
        }
      }
    }
  }

  console.log(result);
}

solution();
