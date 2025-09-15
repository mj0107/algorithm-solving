const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

let index = 0;
const [N, M, X] = input[index++].split(' ').map(Number);
const adjList = Array.from({ length: N + 1 }, () => []);

// PriorityQueue에 삽입 될 자료구조
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // element, priority 삽입
  enqueue(element, priority) {
    const qElement = new QElement(element, priority);
    let isContain = false;

    for (let i = 0; i < this.queue.length; i++) {
      /* priority의 값이 작을수록 더 높은 우선순위를 가진다. */
      // 새로 들어온 값의 우선순위가 queue에 있는 우선순위보다 작으면,
      // 즉 새로 들어온 값의 우선순위가 더 높다면,
      if (this.queue[i].priority > qElement.priority) {
        // i번째에 삽입
        this.queue.splice(i, 0, qElement);
        isContain = true;
        break;
      }
    }

    // 삽입되지 못하였을때,
    // 즉 새로 들어온 값의 우선순위가 기존 큐에 있던 element들의 우선순위들 보다
    // priority의 값이 클경우(priority가 낮을 경우)
    if (!isContain) {
      this.queue.push(qElement);
    }
  }

  // 맨 처음 값 pop
  dequeue() {
    if (!this.isEmpty()) {
      return this.queue.shift();
    } else {
      console.log('Priority Queue is Empty!');
    }
  }

  // 맨 앞의 값 return
  // 즉 우선순위가 가장 높은 요소 return
  front() {
    if (!this.isEmpty()) {
      return this.queue[0];
    } else {
      console.log('Priority Queue is Empty!');
    }
  }

  // 맨 뒤의 값 return
  // 즉 우선순위가 가장 낮은 요소 return
  rear() {
    if (!isEmpty()) {
      return this.queue[this.queue.length - 1];
    } else {
      console.log('Priority Queue is Empty!');
    }
  }

  // 비어있는지 판단
  isEmpty() {
    return this.queue.length === 0 ? true : false;
  }
}

function solution() {
  initAdjList();

  const fromX = dijkstra(X);

  let maxTime = -Infinity;

  for (let i = 1; i <= N; i++) {
    if (i === X) {
      continue;
    }

    const fromI = dijkstra(i);
    const totalTime = fromI[X] + fromX[i];
    maxTime = Math.max(maxTime, totalTime);
  }

  console.log(maxTime);
}

function initAdjList() {
  for (let i = 0; i < M; i++) {
    const [start, end, time] = input[index++].split(' ').map(Number);

    adjList[start].push([end, time]);
  }
}

function dijkstra(start) {
  const timeList = Array.from({ length: N + 1 }, () => Infinity);
  const pq = new PriorityQueue();

  timeList[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const { element: curNode, priority: curTime } = pq.dequeue();

    if (timeList[curNode] < curTime) {
      continue;
    }

    if (adjList[curNode].length > 0) {
      for (const [nextNode, weight] of adjList[curNode]) {
        const time = curTime + weight;

        if (time < timeList[nextNode]) {
          timeList[nextNode] = time;
          pq.enqueue(nextNode, time);
        }
      }
    }
  }

  return timeList;
}

solution();
