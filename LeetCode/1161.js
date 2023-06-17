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
var maxLevelSum = function (root) {
  let maxSum = -Infinity; // 최대 합
  let maxSumLevel = 1; // 최대 합을 이루는 레벨
  let level = 1; // 현재 레벨
  let queue = [root];

  // BFS
  while (queue.length) {
    let queueLength = queue.length;

    // 현재 큐에 담겨 있는, 한 레벨에 있는 노드들의 합
    let sum = queue.reduce((acc, cur) => acc + cur.val, 0);
    // 최대 합을 이룬다면,
    if (sum > maxSum) {
      // 최대합 갱신
      maxSum = sum;
      // 최대합 레벨 갱신
      maxSumLevel = level;
    }

    // 한 층에 있는 모든 노드 순회
    for (let i = 0; i < queueLength; i += 1) {
      let node = queue.shift();

      // 노드의 left가 있다면 queue에 삽입
      if (node.left) {
        queue.push(node.left);
      }
      // 노드의 right가 있다면 queue에 삽입
      if (node.right) {
        queue.push(node.right);
      }
    }

    level += 1;
  }

  return maxSumLevel;
};
