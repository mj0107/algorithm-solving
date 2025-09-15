/* 트리 순회 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const NODE_INFO = input.map((nodeList) => {
  return nodeList.trim().split(' ');
});

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  preOrder(root = this) {
    if (!root) {
      return '';
    }

    let left = this.preOrder(root.left);
    let right = this.preOrder(root.right);

    return root.val + left + right;
  }
  inOrder(root = this) {
    if (!root) {
      return '' ;
    }

    let left = this.inOrder(root.left);
    let right = this.inOrder(root.right);

    return left + root.val + right;
  }
  postOrder(root = this) {
    if (!root) {
      return '';
    }

    let left = this.postOrder(root.left);
    let right = this.postOrder(root.right);

    return left + right + root.val;
  }
}

function solution(N, NODE_INFO) {
  let tree = {};

  NODE_INFO.forEach(([val, left, right]) => {
    tree[val] = new Tree(val);
  });

  NODE_INFO.forEach(([val, left, right]) => {
    if(left !== '.') tree[val].left = tree[left];
    if(right !== '.') tree[val].right = tree[right];
  });

  console.log(tree.A.preOrder());
  console.log(tree.A.inOrder());
  console.log(tree.A.postOrder());
}

solution(N, NODE_INFO);
