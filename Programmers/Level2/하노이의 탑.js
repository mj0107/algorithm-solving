function solution(n) {
  const result = [];

  /**
   * 하노이의 탑 알고리즘
   * @param {*} count 원판 개수
   * @param {*} from 출발 기둥
   * @param {*} via 중간 기둥
   * @param {*} to 도착 기둥
   */
  const hanoi = (count, from, via, to) => {
    // 원판이 하나일 경우 출발 기둥에서 도착 기둥으로 옮긴다.
    if (count === 1) {
      result.push([from, to]);
      return;
    }

    // 원판이 하나 이상일 경우 중간 기둥을 이용하여 원판을 옮긴다.
    hanoi(count - 1, from, to, via);
    // 출발 기둥에 있는 원판을 도착 기둥으로 옮긴다.
    result.push([from, to]);
    // 중간 기둥에 있는 원판을 도착 기둥으로 옮긴다.
    hanoi(count - 1, via, from, to);
  };

  hanoi(n, 1, 2, 3);

  return result;
}
