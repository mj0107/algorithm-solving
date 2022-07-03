/* 에라토스테네스의 체 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);

function solution(N, K) {
  let cnt = 0;
  const isPrime = Array.from({ length: N + 1 }, () => true);

  for(let i=2; i<=N; i++) {
    for(let j=i; j<=N; j+=i) {
      if(isPrime[j]) {
        cnt++;
        isPrime[j] = false;

        if(cnt === K) return j;
      }
    }
  }
}

console.log(solution(N, K));