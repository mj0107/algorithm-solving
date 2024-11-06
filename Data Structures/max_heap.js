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
      return null;
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

    if (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {
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

    if (maxIndex !== index) {
      this.swap(index, maxIndex);
      this.heapifyDown(maxIndex);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
