function maxDivisor(num) {
  // 첫번째 블록은 항상 0이다.
  if (num === 1) return 0;

  // 1과 자기 자신을 제외한 가장 큰 약수를 구하는 방법은,
  // 1을 제외한 가장 작은 약수로 나누면 된다.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // 문제에서 보도블럭의 길이는 10억이지만,
    // 우리가 쓸 수 있는 보도블럭의 최대 번호는 1000만이다.
    // 따라서 최대 약수가 1000만 보다 크면 문제의 조건에 맞지 않으므로,
    // 1000만 보다 크면 쓸 수 없는 블록이므로 최대 약수가 아닌 1을 리턴해준다.
    if (num % i === 0 && num / i < 1e7) return num / i;
  }

  return 1;
}

function solution(begin, end) {
  let result = [];

  for (let i = begin; i <= end; i++) {
    result.push(maxDivisor(i));
  }

  return result;
}
