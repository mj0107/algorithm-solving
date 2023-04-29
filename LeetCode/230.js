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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let nodeList = [];

  // 전위 순회 (DFS)
  const traverse = (node) => {
    if (node === null) {
      return;
    }

    // 왼쪽 먼저 끝까지 순회하면서 nodeList에 넣고,
    traverse(node.left);
    nodeList.push(node.val);
    // 오른쪽 순회
    traverse(node.right);
  };

  traverse(root);

  // 전위 순회하면서 이미 정렬되어 있으므로 문제에 맞는 순서에 해당하는 값 반환
  let result = nodeList.at(k - 1);
  return result;
};
