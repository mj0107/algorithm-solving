class Node {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(node) {
    if (!this.root) {
      this.root = node;
      return;
    }

    let curNode = this.root;
    while (true) {
      if (node.x < curNode.x) {
        if (!curNode.left) {
          curNode.left = node;
          return;
        }
        curNode = curNode.left;
      } else {
        if (!curNode.right) {
          curNode.right = node;
          return;
        }
        curNode = curNode.right;
      }
    }
  }

  preOrder(root = this.root, result = []) {
    if (!root) {
      return;
    }

    result.push(root.value);
    this.preOrder(root.left, result);
    this.preOrder(root.right, result);

    return result;
  }

  postOrder(root = this.root, result = []) {
    if (!root) {
      return;
    }

    this.postOrder(root.left, result);
    this.postOrder(root.right, result);
    result.push(root.value);

    return result;
  }
}

function solution(nodeInfo) {
  const sortedNodeInfo = nodeInfo
    .map(([x, y], i) => [x, y, i + 1])
    .sort((a, b) => b[1] - a[1]);
  const binaryTree = new BinaryTree();

  sortedNodeInfo.forEach(([x, y, value]) => {
    const node = new Node(x, y, value);
    binaryTree.insert(node);
  });

  const preOrderResult = binaryTree.preOrder();
  const postOrderResult = binaryTree.postOrder();

  return [preOrderResult, postOrderResult];
}
