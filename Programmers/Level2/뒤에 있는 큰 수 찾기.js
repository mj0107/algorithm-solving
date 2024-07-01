function solution(numbers) {
  const result = Array.from({ length: numbers.length }, () => -1);
  const stack = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    const cur = numbers[i];
    // stack이 비어있지 않고, stack의 top이 현재 요소 이하일 경우
    while (stack.length > 0 && stack.at(-1) <= cur) {
      // 현재값보다 큰 수가 아니므로 stack에서 제거한다.
      stack.pop();
    }

    // stack이 비어있지 않을 경우
    if (stack.length > 0) {
      // 현재 위치의 요소보다 큰 값은 stack의 top에 있다.
      result[i] = stack.at(-1);
    }

    // stack의 top에 현재 요소를 넣는다.
    stack.push(cur);
  }

  return result;
}
