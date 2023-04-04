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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if(root === null) return [];

  let result = [];
  let queue = [];
  queue.push(root);

  while(queue.length) {
      let level = [];
      let len = queue.length;

      for(let i=0; i<len; i+=1) {
          let node = queue.shift();

          level.push(node.val);
          node.left ? queue.push(node.left) : null;
          node.right ? queue.push(node.right) : null;
      }

      result.push(level);
  }

  return result;
};