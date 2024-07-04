function solution(numbers) {
  const f = (n) => {
    // 32비트가 넘어가게 되면 최상위 bit가 잘리게 되므로 BigInt로 변환한다.
    n = BigInt(n);
    if (n % 2n === 0n) {
      return n + 1n;
    }

    let bit = 1n;
    // 가장 가까운 0을 찾는 반복문이다.
    while ((n & bit) !== 0n) {
      // bit를 왼쪽으로 한 칸씩 이동시킨다.
      bit <<= 1n;
    }
    return n + (bit >> 1n);
  };

  const result = numbers.map((n) => f(n));

  return result;
}
