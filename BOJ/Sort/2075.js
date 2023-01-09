/* N번째 큰 수 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const matrix = [];

input.map((el) => {
  matrix.push(el.split(' ').map(Number));
});

/* 
  if current index = N,
  left child's index = (N*2) + 1
  right child's index = (N*2) + 2
  parent's index = Math.floor((N-1) / 2) 
*/
class Heap {
  constructor() {
      this.items = [];
  }
  swap(index1, index2) {
      let temp = this.items[index1];
      this.items[index1] = this.items[index2];
      this.items[index2] = temp;
  }
  parentIndex(index) {
      return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
      return index * 2 + 1;
  }
  rightChildIndex(index) {
      return index * 2 + 2;
  }
  parent(index) {
      return this.items[this.parentIndex(index)];
  }
  leftChild(index) {
      return this.items[this.leftChildIndex(index)];
  }
  rightChild(index) {
      return this.items[this.rightChildIndex(index)];
  }
  peek() {
      return this.items[0];
  }
  size() {
      return this.items.length;
  }
}
class MinHeap extends Heap {
  //bubbleUp
  bubbleUp() {
      let index = this.items.length - 1;
      while (
          this.parent(index) !== undefined &&
          this.parent(index) > this.items[index]
      ) {
          this.swap(index, this.parentIndex(index));
          index = this.parentIndex(index);
      }
  }
  //bubbleDown
  bubbleDown() {
      let index = 0;
      while (
          this.leftChild(index) !== undefined &&
          (this.leftChild(index) < this.items[index] ||
              this.rightChild(index) < this.items[index])
      ) {
          let smallerIndex = this.leftChildIndex(index);
          if (
              this.rightChild(index) !== undefined &&
              this.rightChild(index) < this.items[smallerIndex]
          ) {
              smallerIndex = this.rightChildIndex(index);
          }
          this.swap(index, smallerIndex);
          index = smallerIndex;
      }
  }
  //add
  add(item) {
      this.items[this.items.length] = item;
      this.bubbleUp();
  }
  //poll
  poll() {
      let item = this.items[0];
      this.items[0] = this.items[this.items.length - 1];
      this.items.pop();
      this.bubbleDown();
      return item;
  }
}

function solution(N, matrix) {
  const min_heap = new MinHeap();

  // 2차원 배열 -> 1차원 배열로 변경
  const arr = matrix.reduce((cur, acc) => {
    return acc.concat(cur);
  });

  for(let i=0; i<arr.length; i++) {
    min_heap.add(arr[i]);

    if(i+1 > N) min_heap.poll();
  }

  console.log(min_heap.peek());
}

solution(N, matrix);