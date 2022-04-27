const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `.\\BOJ\\input.txt`;
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, D] = input.shift().split(' ').map(Number);
let testInput = [];

input.map(item => {
  let tmp = item.split(' ').map(Number);
  testInput.push(tmp);
});

// 우선순위 큐에 삽입되는 데이터 클래스
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

// 우선순위 큐
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  // 데이터의 우선순위에 따라 큐의 적절한 위치에 삽입
  enqueue(element, priority) {
    // QElement 객체 생성
    const qElement = new QElement(element, priority);
    let isContain = false;

    // 전체 데이터를 순회하면서 자신의 우선순위가 더 높은 위치를 탐색
    for(let i=0; i<this.queue.length; i++) {
      if(this.queue[i].priority > qElement.priority) {
        this.queue.splice(i, 0, qElement);
        isContain = true;
        break;
      }
    }
    // 큐에 자신보다 더 낮은 우선순위를 가진 요소가 없을 때, 큐의 맨 마지막에 삽입
    if(!isContain) {
      this.queue.push(qElement);
    }
  }
  dequeue() { // queue의 맨 앞 pop 후 return
    if(!this.isEmpty()) return this.queue.shift();
  }
  front() { // 맨 앞 return
    if(!this.isEmpty()) return this.queue[0];
  }
  rear() { // 맨 뒤 return
    if(!this.isEmpty()) return this.queue[this.queue.length - 1];
  }
  isEmpty() { // 비었으면 return true
    return this.queue.length === 0;
  }
}

function solution(N, D, testInput) {
  // D+1개 만큼 무한대로 초기화
  const dp = Array.from({length: D + 1}, () => Infinity);
  // D+1개 만큼 빈 배열로 초기화
  const edges = Array.from({length: D + 1}, () => []);
  
  for(const row of testInput) {
    const [start, end, len] = row;
    // 고속도로의 길이가 도착 위치보다 작다면 계속,
    if(D < end) continue;
    // 지름길의 길이가 그냥 가는것보다 크다면 계속,
    if(end - start <= len) continue;
    // 도착위치와 지름길의 길이 삽입
    edges[start].push([end, len]);
  }
  const pq = new PriorityQueue();

  dp[0] = 0;
  for(let start=0; start<=D; start++) {
    // dp[start]와 dp[start-1]에 1을 더한것 중 더 작은값 할당
    
    if(start > 0) {
      dp[start] = Math.min(dp[start], dp[start-1] + 1);
    }

    pq.enqueue(start, dp[start]);
    while(!pq.isEmpty()) {
      const qe = pq.dequeue();
      const curPos = qe.element;

      for(const [nextPos, nextDist] of edges[curPos]) {
        if(dp[nextPos] > dp[curPos] + nextDist) {
          dp[nextPos] = dp[curPos] + nextDist;
          pq.enqueue(nextPos, dp[nextPos]);
        }
      }
    }
  }
  console.log(dp[D]);
}

solution(N, D, testInput);