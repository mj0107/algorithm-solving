function solution(topping) {
  // 최대 토핑 종류의 개수
  const COUNT_OF_TOPPING_KIND = 10_000;

  // 토핑 종류별 개수를 저장하는 배열
  const toppingCount1 = Array.from(
    { length: COUNT_OF_TOPPING_KIND + 1 },
    () => 0
  );
  const toppingCount2 = Array.from(
    { length: COUNT_OF_TOPPING_KIND + 1 },
    () => 0
  );

  // 몇 종류의 토핑이 있는지 저장하는 변수
  let count1 = 0;
  let count2 = new Set(topping).size;

  let result = 0;
  // 초기엔 모든 토핑이 2번째 케이크에 올려져 있다고 생각하고 진행한다.
  for (let i = 0; i < topping.length; i++) {
    const kindOfTopping = topping[i];

    toppingCount2[kindOfTopping]++;
  }

  for (let i = 0; i < topping.length; i++) {
    const kindOfTopping = topping[i];

    // 첫번째 케이크에 현재 토핑이 존재하지 않았다면,
    if (toppingCount1[kindOfTopping] === 0) {
      // 토핑 종류의 개수를 하나 늘려준다.
      count1++;
    }
    // 토핑 개수를 증가해준다.
    toppingCount1[kindOfTopping]++;

    // 두번째 케이크에서 현재 토핑을 빼준다.
    toppingCount2[kindOfTopping]--;
    // 두번째 케이크에 현재 토핑이 존재하지 않는다면,
    if (toppingCount2[kindOfTopping] === 0) {
      // 토핑 종류의 개수를 하나 빼준다.
      count2--;
    }

    // 양쪽 케이크의 토핑 종류의 개수가 같다면,
    if (count1 === count2) {
      // 결과값을 하나 늘려준다.
      result++;
    }
  }

  return result;
}
