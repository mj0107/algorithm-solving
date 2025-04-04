const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const sequence = input.shift().split(' ').map(Number);

function solution() {
  const countMap = new Map();
  let left = 0;
  let right = 0;
  let result = -Infinity;

  // 오른쪽 포인터가 끝에 도달하거나 왼쪽 포인터가 오른쪽 포인터보다 커지면 종료
  while (right < N && left <= right) {
    countMap.set(sequence[right], (countMap.get(sequence[right]) || 0) + 1);

    // 오른쪽 포인터가 가리키는 수의 개수가 K를 초과하면 왼쪽 포인터를 오른쪽으로 한 칸 이동
    while (countMap.get(sequence[right]) > K) {
      countMap.set(sequence[left], countMap.get(sequence[left]) - 1);
      left++;
    }

    // 현재 부분 수열의 길이와 최대 길이를 비교하여 최대 길이 갱신
    result = Math.max(result, right - left + 1);
    right++;
  }

  console.log(result);
}

solution();
