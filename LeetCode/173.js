/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.queue = [];
  this.index = 0;
  this.node = root;

  const traverse = (node) => {
    if (node === null) {
      return null;
    }

    // 전위 순회
    traverse(node.left);
    this.queue.push(node);
    traverse(node.right);
  };

  traverse(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  // node에 현재 index의 다음 index가 가리키는 값을 저장하고,
  // index += 1
  this.node = this.queue[this.index++];
  // 현재 노드의 값을 반환
  return this.node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  // 현재 가리키는 인덱스가 맨 끝이 아니라면 true
  return this.index !== this.queue.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
