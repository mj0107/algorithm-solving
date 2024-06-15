/**
 * @param {number} k 선택할 프로젝트의 최대 개수
 * @param {number} w 초기 자본
 * @param {number[]} profits 순수 이익
 * @param {number[]} capital 시작하기 위해 필요한 최소 자본
 * @return {number} 최종 최대 자본
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  // 각 프로젝트를 [자본, 이익] 형태로 저장한다.
  let projectList = profits.map((profit, index) => [capital[index], profit]);

  // 프로젝트를 시작 자본 기준으로 정렬한다.
  projectList.sort((a, b) => a[0] - b[0]);

  let maxHeap = new MaxHeap();
  let i = 0;

  for (let j = 0; j < k; j++) {
    // 현재 자본으로 시작할 수 있는 모든 프로젝트를 힙에 삽입한다.
    while (i < projectList.length && projectList[i][0] <= w) {
      // 이익을 힙에 삽입한다.
      maxHeap.insert(projectList[i][1]);
      i++;
    }

    // 힙에서 가장 큰 이익을 얻을 수 있는 프로젝트를 선택한다.
    if (maxHeap.size() > 0) {
      w += maxHeap.extractMax();
    } else {
      // 더 이상 시작할 수 있는 프로젝트가 없을 경우 중지한다.
      break;
    }
  }

  return w;
};

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  /** 새로운 값을 힙에 추가 */
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  /** 삽입된 값이 올바른 위치에 있을 때까지 상위로 이동 */
  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[index]) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  /** 힙의 최상단 값을 제거한 후, 마지막 값을 최상단으로 이동 */
  extractMax() {
    if (this.size() === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return max;
  }

  /** 최상단 값이 올바른 위치에 있을 때까지 하위로 이동 */
  bubbleDown(index) {
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let largest = index;

      if (
        leftChild < this.size() &&
        this.heap[leftChild] > this.heap[largest]
      ) {
        largest = leftChild;
      }
      if (
        rightChild < this.size() &&
        this.heap[rightChild] > this.heap[largest]
      ) {
        largest = rightChild;
      }

      if (largest === index) {
        break;
      }

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }

  size() {
    return this.heap.length;
  }
}
