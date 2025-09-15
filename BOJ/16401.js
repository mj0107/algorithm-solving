/* 과자 나눠주기 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const cookieLengthList = input.shift().split(' ').map(Number);

function solution(M, N, cookieLengthList) {
  let min = 1;
  let max = Math.max(...cookieLengthList);

  cookieLengthList = cookieLengthList.sort((a, b) => a - b);

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    // 각 길이를 mid로 나눴을때의 수를 모두 더해준다
    let cnt = cookieLengthList.reduce(
      (acc, cur) => acc + Math.floor(cur / mid)
    , 0);

    // 모두 더한 수가 M보다 크다면 더 큰수로 나눠야 값이 작아지므로
    // min을 더 크게 한다.
    if(cnt >= M) min = mid + 1;
    // 모두 더한 수가 M보다 작다면 더 작은수로 나눠야 값이 커지므로
    // max를 더 작게 한다.
    else max = mid - 1;
  }

  console.log(max);
}

solution(M, N, cookieLengthList);
