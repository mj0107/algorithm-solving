/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let list1 = head;
  let list2 = head;

  // list1은 list1.length - n개 만큼 남게 된다.
  for (let i = 0; i < n; i += 1) {
    list1 = list1.next;
  }

  // 만약 list1이 끝까지 도달했다면 list1이 n개의 node를 갖고있다는 의미이므로,
  // head를 반환해준다.
  if (!list1) {
    return head.next;
  }

  // list1이 끝까지 도달할 때 까지 반복문을 돌린다.
  // list2는 처음부터 시작하므로 list1.length - n 만큼 next로 가게 된다.
  // 즉 끝에서 거꾸로 n만큼 이동한 효과를 갖는다
  while (list1.next) {
    list1 = list1.next;
    list2 = list2.next;
  }

  // n번째와의 연결을 끊어주고 n+1 번째와 연결해준다.
  list2.next = list2.next.next;

  return head;
};
