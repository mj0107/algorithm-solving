/* 피보나치 함수 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();
const test_case = input.map(Number);
// [0 호출 횟수, 1 호출 횟수] 쌍으로 저장
let dp = Array.from({ length: 40 }, () => new Array(2).fill(0));

dp[0] = [1, 0];
dp[1] = [0, 1];

/**
 * 0이 출력되는 횟수와 1이 출력되는 횟수를 공백으로 구분해서 출력.
 * @param {Number} T  테스트 케이스의 개수
 * @param {Number[]} test_case 테스트 케이스
 */
function solution(T, test_case) {
  for (let i = 2; i <= 40; i++) {
    dp[i] = [dp[i - 2][0] + dp[i - 1][0], dp[i - 2][1] + dp[i - 1][1]];
  }

  for (let i = 0; i < T; i++) {
    const tc = test_case.shift();

    console.log(dp[tc][0], dp[tc][1]);
  }
}

solution(T, test_case);
