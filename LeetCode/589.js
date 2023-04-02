/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
  let result = [];

  const traversal = (root) => {
      if(root === null) return;

      result.push(root.val);
      root.children.forEach((node) => {
          traversal(node);
      });
  }

  traversal(root);
  return result;
};