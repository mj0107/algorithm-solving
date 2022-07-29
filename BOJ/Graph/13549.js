/* 숨바꼭질 3 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// N: 수빈이의 위치, K: 동생의 위치
const [N, K] = input.shift().split(' ').map(Number);

function solution(N, K) {
  const visit = Array.from({ length: 1e5+1 }, () => false);
  const deque = [];

  // [처음 수진이의 위치 N, 처음 시간 0]
  deque.push([N, 0]);
  // 처음 수진이의 위치 방문처리
  visit[N] = true;

  while(deque.length > 0) {
    const [cur, time] = deque.shift();
    // 동생의 위치에 도달할 경우 return
    if(cur === K) {
      console.log(time);
      break;
    }

    for(next of [cur*2, cur-1, cur+1]) {
      // 범위를 넘지않고 범위 안에 존재할 경우
      if(!visit[next] && next >= 0 && next <= 1e5) {
        visit[next] = true;
        if(next === cur * 2) { // 순간이동시에는 시간이 걸리지 않음
          // 걸리는 시간의 최솟값을 구해야 하므로 2배 이동시가 우선순위가 더 높다
          // 따라서 맨 앞에 넣어준다
          deque.unshift([next, time]);
        }
        else { // 한칸씩 이동시에는 1초의 시간이 걸림
          deque.push([next, time + 1]);
        }
      }
    }
  }
}

solution(N, K);