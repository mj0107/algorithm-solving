/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  let tmp = [];
  while(head) {
      tmp.push(head.val);
      head = head.next;
  }

  return tmp.join('') === tmp.reverse().join('')
};