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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let count = 0;

  const isTargetSum = (node, sum) => {
    if (node === null) {
      return;
    }

    // 현재 노드의 값과 targetSum이 같다면,
    // 현재 노드만 더하면 targetSum이 되는것이므로 count + 1
    if (sum + node.val === targetSum) {
      count += 1;
    }

    // 왼쪽 subtree를 탐색하면서 targetSum에서 현재 노드의 값을 빼줌
    isTargetSum(node.left, sum + node.val);
    // 오른쪽 subtree를 탐색하면서 targetSum에서 현재 노드의 값을 빼줌
    isTargetSum(node.right, sum + node.val);
  };

  const DFS = (node) => {
    if (node === null) {
      return;
    }

    DFS(node.left);
    DFS(node.right);
    isTargetSum(node, 0);
  };

  DFS(root);

  return count;
};
