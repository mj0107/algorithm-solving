/* 계단 오르기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const stair_cnt = +input.shift();
const scores = [0, ...input.map(Number)];

const dp = Array.from({ length: stair_cnt + 1 }, () => 0);

function solution(stair_cnt, scores) {
  dp[1] = scores[1];
  dp[2] = scores[1] + scores[2];

  for (let i = 3; i <= stair_cnt; i++) {
    dp[i] = scores[i] + Math.max(dp[i - 2], dp[i - 3] + scores[i - 1]);
  }

  console.log(dp[stair_cnt]);
}

solution(stair_cnt, scores);
