function solution(number) {
  let result = 0;

  // 조합 구하기
  const combination = (current, start) => {
    if (current.length === 3) {
      // current에 숫자 3개가 있을 때
      // 합이 0이면 +1
      result += current.reduce((acc, cur) => acc + cur) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i += 1) {
      combination([...current, number[i]], i + 1);
    }
  };

  combination([], 0);

  return result;
}
