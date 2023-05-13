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
var isSymmetric = function (root) {
  const isMirror = (left, right) => {
    // p와 q 둘다 끝까지 탐색을 완료했다면,
    // 같지 않다는 조건에 걸리지 않았다는 의미이므로 true 반환
    if (!left && !right) {
      return true;
    }
    // 한쪽만 끝까지 탐색했다면 같지않다는 의미이므로 false 반환
    if (!left || !right) {
      return false;
    }
    // 둘의 node의 값이 같지않다면 false 반환
    if (left.val !== right.val) {
      return false;
    }

    // 대칭 확인
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  };

  return isMirror(root.left, root.right);
};
