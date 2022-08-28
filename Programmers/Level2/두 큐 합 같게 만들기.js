function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function solution(queue1, queue2) {
  let queue1_sum = sum(queue1);

  let queue = [...queue1, ...queue2];
  let target_sum = sum(queue) / 2;

  let p1 = 0; // queue1의 시작
  let p2 = queue1.length; // queue2의 시작
  let cnt = 0;

  /* 
    최악의 경우,
    queue1의 모든 요소가 queue2로 넘어갔다가
    queue2의 모든 요소가 queue1으로 넘어갈경우,
    문제에서 queue1.length === queue2.length 이므로,
    queue1.length * 3 정도 반복하게 된다.

    예를 들어,
    queue1 = [1,1,1,1,1]
    queue2 = [1,1,1,9,1]
    target_sum = 9
    queue2에서 9까지 모두 queue1으로 넘어간 후,
    queue1에서 9전까지 모두 queue2로 넘어가게 되면,
    queue1 = [9]
    queue2 = [1,1,1,1,1,1,1,1,1]
  */
  let max_cnt = queue1.length * 3;

  while (cnt < max_cnt) {
    if (queue1_sum === target_sum) return cnt;

    if (queue1_sum < target_sum) queue1_sum += queue[p2++];
    else if (queue1_sum > target_sum) queue1_sum -= queue[p1++];

    cnt++;
  }

  return -1;
}
