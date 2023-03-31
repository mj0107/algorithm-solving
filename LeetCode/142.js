/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  let listNodeSet = new Set();

  while(head) {
      if(listNodeSet.has(head)) {
          return head;
      }
      listNodeSet.add(head);
      head = head.next;
  }

  return null;
};