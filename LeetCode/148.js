/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
  if(!head) {
      return null;
  }

  let result = [];

  while(head) {
      result.push(head);
      head = head.next;
  }

  result.sort((a, b) => a.val - b.val);

  for(let i=0; i<result.length; i+=1) {
      result[i].next = result[i + 1] || null;
  }

  return result[0];
};