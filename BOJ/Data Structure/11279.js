const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMax() {
    if (this.heap.length === 0) {
      return 0;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return max;
  }

  heapifyUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (parentIndex >= 0 && this.heap[index] > this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let maxIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[maxIndex] < this.heap[leftChildIndex]
    ) {
      maxIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[maxIndex] < this.heap[rightChildIndex]
    ) {
      maxIndex = rightChildIndex;
    }

    if (index !== maxIndex) {
      this.swap(index, maxIndex);
      this.heapifyDown(maxIndex);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

const N = +input.shift();
const commandList = input.map(Number);

function solution() {
  const maxHeap = new MaxHeap();
  const result = [];

  for (const command of commandList) {
    if (command === 0) {
      result.push(maxHeap.extractMax());
      continue;
    }

    maxHeap.insert(command);
  }

  console.log(result.join('\n'));
}

solution();
