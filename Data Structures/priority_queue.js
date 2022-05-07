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

    for(let i=0; i<this.queue.length; i++) {
      /* priority의 값이 작을수록 더 높은 우선순위를 가진다. */
      // 새로 들어온 값의 우선순위가 queue에 있는 우선순위보다 작으면,
      // 즉 새로 들어온 값의 우선순위가 더 높다면,
      if(this.queue[i].priority > qElement.priority) {
        // i번째에 삽입
        this.queue.splice(i, 0, qElement);
        isContain = true;
        break;
      }
    }

    // 삽입되지 못하였을때,
    // 즉 새로 들어온 값의 우선순위가 기존 큐에 있던 element들의 우선순위들 보다
    // priority의 값이 클경우(priority가 낮을 경우)
    if(!isContain) {
      this.queue.push(qElement);
    }
  }
  
  // 맨 처음 값 pop
  dequeue() {
    if(!isEmpty()) {
      return this.queue.shift();
    }
    else {
      console.log("Priority Queue is Empty!");
    }
  }

  // 맨 앞의 값 return
  // 즉 우선순위가 가장 높은 요소 return
  front() {
    if(!isEmpty()) {
      return this.queue[0];
    }
    else {
      console.log("Priority Queue is Empty!");
    }
  }

  // 맨 뒤의 값 return
  // 즉 우선순위가 가장 낮은 요소 return
  rear() {
    if(!isEmpty()) {
      return this.queue[this.queue.length - 1];
    }
    else {
      console.log("Priority Queue is Empty!");
    }
  }

  // 비어있는지 판단
  isEmpty() {
    return this.queue.length === 0 ? true : false;
  }
}

const test = () => {
  const testInput = [
    [0, 1],
    [3, 5],
    [43, 3],
    [54, 9],
    [12, 10],
    [99, 312]
  ];
  
  const pq = new PriorityQueue();
  
  for(item of testInput) {
    const [element, priority] = item;
    pq.enqueue(element, priority);
  }
  
  console.log(pq);
}

test();

/*
PriorityQueue {
  queue: [
    QElement { element: 0, priority: 1 },
    QElement { element: 43, priority: 3 },
    QElement { element: 3, priority: 5 },
    QElement { element: 54, priority: 9 },
    QElement { element: 12, priority: 10 },
    QElement { element: 99, priority: 312 }
  ]
}
*/