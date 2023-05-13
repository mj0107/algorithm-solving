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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let result = [];
  const searchRightSide = (node, depth) => {
    if (!node) {
      return;
    }

    // 현재 탐색해야할 depth 라면
    if (depth === result.length) {
      // 현재 노드의 값을 넣어줌
      result.push(node.val);
    }

    // 오른쪽에 노드가 없을경우 왼쪽을 탐색해야 하므로,
    // 반드시 오른쪽부터 탐색해야함
    searchRightSide(node.right, depth + 1);
    searchRightSide(node.left, depth + 1);
  };

  searchRightSide(root, 0);

  return result;
};
