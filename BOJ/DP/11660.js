/* 구간 합 구하기 5 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const TABLE = [];
for (let i = 0; i < N; i += 1) {
  const ROW = input.shift().split(' ').map(Number);
  TABLE.push(ROW);
}
const COORD_LIST = input.map((row) => {
  return row.split(' ').map(Number);
});

function solution(N, M, TABLE, COORD_LIST) {
  let dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => 0)
  );

  // TABLE에 0-padding 붙여서 초기화
  for (let i = 1; i <= N; i += 1) {
    for (let j = 1; j <= N; j += 1) {
      dp[i][j] = TABLE[i - 1][j - 1];
    }
  }

  // [0, 0] 부터 [i, j] 까지의 누적합
  for (let i = 1; i <= N; i += 1) {
    for (let j = 1; j <= N; j += 1) {
      dp[i][j] += dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
  }

  let result = [];
  // [x1, y1]부터 [x2, y2]의 누적합 =
  // [0, 0]부터 [x2, y2]의 누적합 - [0, 0]부터 [x1 - 1, y2]의 누적합 -
  // [0, 0]부터 [x2, y1 - 1]의 누적합 + [0, 0]부터 [x1 - 1, y1 - 1]의 누적합
  // 마지막에 [0, 0]부터 [x1 - 1, y1 - 1]의 누적합을 더해주는 이유는,
  // 앞에서 중복되는 구간이라 두 번 빼졌기 때문에 한번 더해준다.
  for (let [x1, y1, x2, y2] of COORD_LIST) {
    result.push(
      dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1]
    );
  }

  result = result.join('\n');
  console.log(result);
}

solution(N, M, TABLE, COORD_LIST);
