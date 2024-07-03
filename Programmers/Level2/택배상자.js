function solution(orderList) {
  const stack = [];
  let currentBox = 1;
  let result = 0;

  for (let i = 0; i < orderList.length; i++) {
    // box의 번호가 orderList에 있는 번호보다 작거나 같다면,
    while (currentBox <= orderList[i]) {
      // stack에 box 번호 push 하고,
      stack.push(currentBox);
      // 번호를 증가시킨다.
      currentBox++;
    }

    // 만약 stack의 top이 현재 실어아 할 box라면,
    if (stack.at(-1) === orderList[i]) {
      // stack에서 pop하고,
      stack.pop();
      // 결과값을 하나 증가시킨다.
      result++;
    } else {
      break;
    }
  }

  return result;
}
