/* 요세푸스 문제 0 */
const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.pop().split(' ').map(Number);

function solution(N, K) {
  let queue = Array.from({ length: N }, (_, i) => i + 1);
  let result = [];

  let idx = K - 1;
  while(queue.length) {
    idx = idx % queue.length;
    result.push(...queue.splice(idx, 1));
    idx += K - 1;
  }

  console.log(`<${result.join(', ')}>`);
}

solution(N, K);