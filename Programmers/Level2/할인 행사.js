/**
 * 원하는 제품명과 제품수량들이 담긴 각각의 리스트를 받아서  
 * key:제품명, value:제품수량을 가지는 Map으로 초기화 하는 함수
 * 
 * @param {string[]} want 원하는 제품명들이 담긴 리스트
 * @param {number[]} number 원하는 제품수량들이 담긴 리스트
 * @param {Map} wantCountMap 초기화할 Map
 */
function initWantCountObject(want, number, wantCountMap) {
  const WANT_LIST_LENGTH = want.length;

  let [wantProduct, wantCount] = ['', 0];
  for (let i = 0; i < WANT_LIST_LENGTH; i += 1) {
    [wantProduct, wantCount] = [want[i], number[i]];

    wantCountMap.set(wantProduct, wantCount);
  }
}

/**
 * start부터 end일까지 할인 품목을 Map의 key값으로 가지는 value를 마이너스 시키는 함수
 * 
 * @param {Map} wantCountMap key:제품명, value:제품수량을 가지는 Map
 * @param {string[]} discount 할인 품목 리스트
 * @param {number} start 회원 등록 일
 * @param {number} end 회원 자격이 끝나는 일
 */
function updateWantCountMap(wantCountMap, discount, start, end) {
  let discountProduct = '';
  for (let i = start; i < end; i += 1) {
    discountProduct = discount[i];

    if (wantCountMap.has(discountProduct)) {
      wantCountMap.set(discountProduct, wantCountMap.get(discountProduct) - 1);
    }
  }
}

/**
 * 조건을 만족하는 회원 등록이 가능한 날인지 판단해서 boolean 값을 반환하는 함수
 * 
 * @param {Map} wantCountMap 제품 수량을 모두 업데이트
 * @returns {boolean} 회원 등록이 가능한 날이면 true 반환 
 */
function isPossibleDay(wantCountMap) {
  let result = 0;

  result = [...wantCountMap.values()].every((count) => count <= 0);

  return result;
}

function solution(want, number, discount) {
  const MEMBERSHIP_PERIOD = 10;
  const MAX_START_DAY = discount.length - MEMBERSHIP_PERIOD;
  let result = 0;
  let wantCountMap = new Map();

  let [start, end] = [0, 0];
  for (let i = 0; i <= MAX_START_DAY; i += 1) {
    [start, end] = [i, i + MEMBERSHIP_PERIOD];

    initWantCountObject(want, number, wantCountMap);
    updateWantCountMap(wantCountMap, discount, start, end);

    if (isPossibleDay(wantCountMap)) {
      result += 1;
    }
  }

  return result;
}
