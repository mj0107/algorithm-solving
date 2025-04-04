const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const temperatureList = input.shift().split(' ').map(Number);

function solution() {
  let sum = 0;
  let maxSum = -Infinity;

  /**
   * 초기 합 계산
   */
  const initSum = () => {
    for (let i = 0; i < K; i++) {
      sum += temperatureList[i];
    }
  };

  /**
   * 최대 합 계산
   */
  const getMaxSum = () => {
    // N과 K가 같으면 초기 합이 최대 합
    if (N === K) {
      maxSum = sum;
      return;
    }

    // 초기 합을 계산한 후, 오른쪽 포인터를 옮겨가면서 합을 계산
    for (let i = 0; i <= N - K; i++) {
      maxSum = Math.max(maxSum, sum);

      sum -= temperatureList[i];
      sum += temperatureList[i + K];
    }
  };

  initSum();
  getMaxSum();

  console.log(maxSum);
}

solution();
