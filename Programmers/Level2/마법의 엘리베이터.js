function solution(storey) {
  let curFloor = storey;
  let result = 0;

  while (curFloor !== 0) {
    // 현재 층의 마지막 자리 수
    const endDigit = curFloor % 10;
    // 현재 층의 마지막에서 두 번째 자리 수
    const nextDigit = Number((curFloor % 100) / 10);
    let moveCount = 0;

    if (endDigit === 0) {
      curFloor /= 10;
      continue;
    }

    // 마지막 자리 수가 5보다 크거나 같거나,
    // 마지막 자리 수가 5이고 두 번째 자리 수가 5보다 크거나 같으면
    // 올림 처리 한다.
    if (endDigit > 5 || (endDigit === 5 && nextDigit >= 5)) {
      moveCount = 10 - endDigit;
      curFloor += moveCount;
      result += moveCount;
    }
    // 내림 처리 한다.
    else {
      moveCount = endDigit;
      curFloor -= moveCount;
      result += moveCount;
    }
  }

  return result;
}
