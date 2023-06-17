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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let nodeList = [];

  // 전위 순회
  const traverse = (node) => {
    if (!node) {
      return null;
    }

    traverse(node.left);
    nodeList.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  let min = Infinity;
  for (let i = 1; i < nodeList.length; i += 1) {
    let diff = nodeList[i] - nodeList[i - 1];
    min = Math.min(min, diff);
  }

  return min;
};
