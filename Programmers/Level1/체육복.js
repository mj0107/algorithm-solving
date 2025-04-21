/**
 * @param {*} n 전체 학생 수
 * @param {*} lost 체육복을 도난당한 학생들의 번호가 담긴 배열
 * @param {*} reserve 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
 * @returns 체육복을 입을 수 있는 학생 수
 */
function solution(n, lost, reserve) {
  const clothCountList = Array.from({ length: n + 1 }, () => 1);

  reserve.forEach((number) => clothCountList[number]++);
  lost.forEach((number) => clothCountList[number]--);

  // 여벌의 체육복을 가져온 학생들 중 체육복을 도난당한 학생들은 빼고 정렬한다.
  const canBorrowList = reserve
    .filter((number) => clothCountList[number] === 2)
    .sort((a, b) => a - b);

  // 체육복을 빌려야 하는 학생들을 찾아서 체육복을 빌려준다.
  canBorrowList.forEach((curNumber) => {
    const prevNumber = curNumber - 1;
    const nextNumber = curNumber + 1;

    if (prevNumber >= 1 && clothCountList[prevNumber] === 0) {
      clothCountList[prevNumber]++;
      clothCountList[curNumber]--;
      return;
    }

    if (nextNumber <= n && clothCountList[nextNumber] === 0) {
      clothCountList[nextNumber]++;
      clothCountList[curNumber]--;
    }
  });

  // 체육복을 입을 수 있는 학생 수를 구한다.
  // 번호가 1번부터 시작하므로 0번째 인덱스는 빼고 계산한다.
  const result = clothCountList.filter((count) => count >= 1).length - 1;
  return result;
}
