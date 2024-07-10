function solution(arrayA, arrayB) {
  let result = 0;

  /**
   * 두 정수를 인자로 받아 최대공약수를 반환하는 함수이다.
   *
   * @param {number} a 정수1
   * @param {number} b 정수2
   * @returns 두 정수의 최대공약수
   */
  const getGCD = (a, b) => {
    if (b === 0) {
      return a;
    }

    return getGCD(b, a % b);
  };

  /**
   * 정수 배열을 받아서, 배열안의 숫자들에 대한 최대공약수를 반환하는 함수이다.
   *
   * @param {number[]} array
   * @returns 배열에 있는 숫자들의 최대공약수
   */
  const getGCDOfArray = (array) => {
    // 만약 배열에 요소가 1개만 있다면, 그 값 자체가 최대공약수이다.
    if (array.length === 1) {
      return array[0];
    }

    let result = array[0];
    for (let i = 0; i < array.length; i++) {
      result = getGCD(result, array[i]);
    }

    return result;
  };

  const gcdA = getGCDOfArray(arrayA);
  const gcdB = getGCDOfArray(arrayB);

  // 배열의 최대공약수가 1이라는 말은, 1보다 큰 공약수가 없다는 뜻이다.
  // arrayA의 최대공약수로 arrayB에 나누어 떨어지는 수가 없다면,
  // 조건을 만족하므로 저장되어 있는 결과값의 최대값을 갱신한다.
  if (gcdA !== 1 && arrayB.every((el) => el % gcdA !== 0)) {
    result = Math.max(result, gcdA);
  }

  // arrayB의 최대공약수로 arrayA에 나누어 떨어지는 수가 없다면,
  // 조건을 만족하므로 저장되어 있는 결과값의 최대값을 갱신한다.
  if (gcdB !== 1 && arrayA.every((el) => el % gcdB !== 0)) {
    result = Math.max(result, gcdB);
  }

  return result;
}
