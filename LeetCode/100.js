/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // p와 q 둘다 끝까지 탐색을 완료했다면,
  // 같지 않다는 조건에 걸리지 않았다는 의미이므로 true 반환
  if (!p && !q) {
    return true;
  }
  // 한쪽만 끝까지 탐색했다면 같지않다는 의미이므로 false 반환
  if (!p || !q) {
    return false;
  }
  // 둘의 node의 값이 같지않다면 false 반환
  if (p.val !== q.val) {
    return false;
  }

  // 왼쪽끼리의 node와 오른쪽끼리의 node가 모두 같다면 true, 아니라면 false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
