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
 var diameterOfBinaryTree = function(root) {
  let max = 0;

  const DFS = (node) => {
      if(node === null) {
          return 0;
      }

      let left = DFS(node.left);
      let right = DFS(node.right);

      // 왼쪽 subtree와 오른쪽 subtree중 더 depth가 큰 것
      max = Math.max(max, left + right);
      return Math.max(left, right) + 1;
  }

  DFS(root);

  return max;
};