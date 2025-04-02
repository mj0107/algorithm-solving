/**
 * 우박수열 정적분
 * @param {number} k 우박수열의 첫 번째 수
 * @param {number[][]} ranges 정적분을 구할 범위
 * @returns {number[]} 정적분 결과
 */
function solution(k, ranges) {
  const hailstoneSequence = [{ x: 0, y: k }];
  const areaList = [];
  const result = [];

  /**
   * 우박수열 생성
   */
  const getHailstoneSequence = () => {
    let order = 0;
    let curNumber = k;

    while (curNumber > 1) {
      if (curNumber % 2 === 0) {
        curNumber = curNumber / 2;
      } else {
        curNumber = curNumber * 3 + 1;
      }

      order++;
      hailstoneSequence.push({ x: order, y: curNumber });
    }
  };

  /**
   * 넓이 리스트 생성
   */
  const getAreaList = () => {
    for (let i = 1; i < hailstoneSequence.length; i++) {
      const prevCoords = hailstoneSequence[i - 1];
      const curCoords = hailstoneSequence[i];

      const upperBase = prevCoords.y;
      const lowerBase = curCoords.y;
      const height = 1;
      const area = ((upperBase + lowerBase) * height) / 2;

      areaList.push(area);
    }
  };

  /**
   * 정적분 계산
   * @param {number} a 시작 인덱스
   * @param {number} b 끝 인덱스
   * @returns {number} 정적분 결과
   */
  const getIntegral = (a, b) => {
    const start = a;
    const end = hailstoneSequence.length - 1 + b;

    if (start > end) {
      return -1;
    }

    if (start === end) {
      return 0;
    }

    let sum = 0;
    for (let i = start; i < end; i++) {
      sum += areaList[i];
    }

    return sum;
  };

  /**
   * 결과 생성
   */
  const getResult = () => {
    for (const [a, b] of ranges) {
      const integral = getIntegral(a, b);

      result.push(integral);
    }
  };

  getHailstoneSequence();
  getAreaList();
  getResult();

  return result;
}
