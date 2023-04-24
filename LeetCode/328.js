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
 var oddEvenList = function(head) {
  if(!head) return head;

  let oddList = head;
  let evenList = head.next;

  let oddListHead = oddList;
  let evenListHead = evenList;

  while(oddList.next && evenList.next) {
      oddList.next = oddList.next.next;
      oddList = oddList.next;

      evenList.next = evenList.next.next;
      evenList = evenList.next;
  }

  oddList.next = evenListHead;
  let result = oddListHead;

  return result;
};