function solution(weights) {
  let result = 0;
  const countMap = new Map();

  for (const weight of weights) {
    countMap.set(weight, (countMap.get(weight) || 0) + 1);
  }

  for (const [weight, count] of countMap) {
    // 같은 몸무게
    result += (count * (count - 1)) / 2;

    // 2:3 비율
    if (countMap.has((weight * 3) / 2)) {
      result += count * countMap.get((weight * 3) / 2);
    }

    // 1:2 비율
    if (countMap.has(weight * 2)) {
      result += count * countMap.get(weight * 2);
    }

    // 3:4 비율
    if (countMap.has((weight * 4) / 3)) {
      result += count * countMap.get((weight * 4) / 3);
    }
  }

  return result;
}
