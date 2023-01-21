function solution(n, k) {
  let result = [];
  let numberList = Array.from({ length: n }, (_, idx) => idx + 1);

  /**
   * 현재 순서의 숫자를 구해서 반환하는 함수
   * 
   * @param {number[]} numberList 줄을 서야 할 사람들의 숫자가 담긴 리스트
   * @returns {number} 현재 순서의 숫자
   */
  const getCurrentOrder = (numberList) => {
    // 순열에서 맨 앞의 숫자가 바뀔 때까지를 한 주기라고 할 때,
    // 한 주기안에 있는 순열의 개수

    // [1,2,3] 이라면 총 순열의 개수는 3! = 6
    // [1,2,3], [1,3,2]
    // [2,1,3], [2,3,1]
    // [3,1,2], [3,2,1]

    // 3! = 3 * 2! => 2!이 3개(rotation의 개수) 있다고 생각하면 됨
    // 2!(rotation 안의 순열의 개수) 마다 맨 앞의 숫자가 바뀜
    let numberInRotation = 1;
    for (let i = 1; i < numberList.length; i += 1) {
      numberInRotation *= i;
    }

    // k는 총 순열의 개수에서 몇 번째인지를 나타내고,
    // numberInRotation은 한 rotation에 몇 개의 순열이 있는지 나타내므로
    // k / rotation = 몇 번째 rotation, 즉 몇 번째 숫자가 맨 앞에 와야하는지 알 수 있음
    // 다만 index는 0부터 시작하므로 1을 빼줌
    let idx = Math.ceil(k / numberInRotation) - 1;

    // 다음 순서를 구하기 위해 현재 순서를 빼줌
    // 예를 들어 numberList가 [1,2,3]이고 k가 5라면,
    // [3,1,2] 인데 3을 구했다면 남은 [1,2] 중에서만 다음 순서를 구하면 됨
    k = k - idx * numberInRotation;

    return numberList[idx];
  };

  for (let i = 0; i < n; i += 1) {
    let currentOrder = getCurrentOrder(numberList, k);
    numberList.splice(numberList.indexOf(currentOrder), 1);
    result.push(currentOrder);
  }

  return result;
}

const result = solution(3, 5);
console.log(result);
