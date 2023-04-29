/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid], null, null);

  // 가운데는 root node 이기 때문에 가운데를 빼고 왼쪽, 오른쪽으로 나눠줌
  let left = nums.slice(0, mid);
  let right = nums.slice(mid + 1);

  root.left = sortedArrayToBST(left);
  root.right = sortedArrayToBST(right);

  return root;
};
