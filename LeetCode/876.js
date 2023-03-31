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
 var middleNode = function(head) {
  let list1 = head;
  let list2 = head;

  while(list2 && list2.next) {
      list1 = list1.next;
      list2 = list2.next.next;
  }

  return list1;
};