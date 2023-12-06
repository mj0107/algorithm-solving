const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const WEIGHT_LIST = input.shift().split(' ').map(Number);
const isUsed = Array.from({ length: N }, () => false);
let result = 0;

const solution = () => {
  // 처음에 키트 사용횟수 0, 총 중량 500을 인자로 넘겨준다.
  getPermutation(0, 500);

  console.log(result);
};

/**
 * 순열로 가능한 순서인지 판단하는 함수
 * 
 * @param {number} count 키트를 사용한 횟수
 * @param {number} totalWeight 총 중량
 * @returns 
 */
const getPermutation = (count, totalWeight) => {
  // 만약 총 중량이 500미만이라면 다른 순열을 찾는다.
  if (totalWeight < 500) {
    return;
  }

  // 만약 모든 키트를 다 사용했다면,
  // 위의 조건에 걸리지 않았으므로 결과값에 1을 더해준다.
  if (count === N) {
    result += 1;
    return;
  }

  for (let i = 0; i < N; i++) {
    // 만약 사용한 키트라면 다음 키트를 사용한다.
    if (isUsed[i] === true) {
      continue;
    }

    // 현재 키트를 사용처리 해준다.
    isUsed[i] = true;
    // 키트 사용개수를 1 더해주고, 그 키트의 중량만큼 더하고 K만큼 빼준다.
    getPermutation(count + 1, totalWeight + WEIGHT_LIST[i] - K);
    // 다른 순열을 찾기 위해 키트를 미사용처리 해준다.
    isUsed[i] = false;
  }
};

solution();
