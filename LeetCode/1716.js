/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = (n) => {
  let start = 1; // 시작 금액
  let cur = 0; // 현재 금액
  let total = 0; // 총 금액

  for(let i=0; i<n; i++) {
    total += (start + cur);
    cur += 1;

    // 일주일이 지났다면,
    if(cur % 7 === 0) {
      // 시작 금액 1 더해주고,
      start += 1;
      // 현재 금액은 0으로 다시 초기화해준다.
      cur = 0;
    }
  }

  return total;
};