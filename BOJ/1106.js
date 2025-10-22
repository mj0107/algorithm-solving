const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// C = 늘릴 고객의 수, N = 홍보할 수 있는 도시의 개수
const [C, N] = input.shift().split(' ').map(Number);
const infoList = input.map((row) => row.split(' ').map(Number));

function solution() {
  const dp = Array.from({ length: C + 1 }, () => Infinity);

  dp[0] = 0;

  for (let i = 0; i <= C; i++) {
    if (dp[i] === Infinity) {
      continue;
    }

    for (const [cost, people] of infoList) {
      // 최대 C명으로 제한한다.
      const customer = Math.min(C, i + people);

      // 기존의 최소 비용과 현재 상태에서 비용을 더했을 때 비교해서 최소 비용으로 갱신한다.
      dp[customer] = Math.min(dp[customer], dp[i] + cost);
    }
  }

  console.log(dp[C]);
}

solution();