/* 대회 or 인턴 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// N: 여, M: 남, K: 인턴쉽에 참여해야하는 인원 수
const [N, M, K] = input.shift().split(' ').map(Number);

// 2명의 여학생과 1명의 남학생이 팀을 결성해야 함
function solution(N, M, K) {
  let cnt = 0;

  while(true) {
    N -= 2;
    M -= 1;
    
    if(N<0 || M<0) break;
    if(N+M < K) break;

    cnt++;
  }

  console.log(cnt);
}

solution(N, M, K);