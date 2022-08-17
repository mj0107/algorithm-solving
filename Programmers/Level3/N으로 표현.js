function solution(N, number) {
  const calc_result = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    // N을 i회 사용하는 경우 add
    // 기본적으로 i개의 N을 붙여서 사용하는 경우 add
    // ex) N=5, i=3 -> 555
    calc_result[i].add(Number(`${N}`.repeat(i)));
    for (let j = 1; j < i; j++) {
      for (const n1 of calc_result[j]) {
        for (const n2 of calc_result[i - j]) {
          calc_result[i].add(n1 + n2);
          calc_result[i].add(n1 - n2);
          calc_result[i].add(n1 * n2);
          // 분모가 0일경우 Infinity가 되는데,
          // 비트 연산을 하게되면 0이 됨
          calc_result[i].add((n1 / n2) >> 0);
        }
      }
    }
    if (calc_result[i].has(number)) return i;
  }

  return -1;
}
