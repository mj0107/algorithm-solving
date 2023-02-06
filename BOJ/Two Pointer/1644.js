/* 소수의 연속합 */
const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

function solution(N) {
  // 에라토스테네스의 체
  let primeList = Array.from({ length: N + 1 }, () => true);
  primeList[0] = false;
  primeList[1] = false;

  for (let i = 2; i <= Math.sqrt(N); i += 1) {
    if (primeList[i]) {
      for (let j = i * 2; j <= N; j += i) {
        primeList[j] = false;
      }
    }
  }

  // N이하의 소수 리스트
  let primeNumberList = primeList
    .map((el, idx) => {
      if (el === true) return idx;
    })
    .filter((el) => el);

  // 투 포인터
  let [start, end] = [0, 0];
  let sum = 0;
  let cnt = 0;
  while(true) {
    if(end > primeNumberList.length) {
      break;
    }
    if(sum === N) {
      cnt += 1;
      sum += primeNumberList[end];
      end += 1;
    }
    if(sum < N) {
      sum += primeNumberList[end];
      end += 1;
    }
    if(sum > N) {
      sum -= primeNumberList[start];
      start += 1;
    }
  }

  console.log(cnt);
}

solution(N);
