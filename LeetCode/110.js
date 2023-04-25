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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let result = true;

  const DFS = (node, height) => {
    // 빈 subtree라면 height 0 반환
    if (node === null) {
      return 0;
    }

    let leftHeight = DFS(node.left, height + 1);
    let rightHeight = DFS(node.right, height + 1);

    // height 차이가 1보다 크다면 false
    if (Math.abs(leftHeight - rightHeight) > 1) {
      result = false;
    }

    // 왼쪽과 오른쪽중 큰 height에 + 1을 해서 반환
    // backtracking 을 하면서 높이를 구해줌
    return Math.max(leftHeight, rightHeight) + 1;
  };

  DFS(root, 0);

  return result;
};
