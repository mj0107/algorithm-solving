/* 돌 게임 2 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

/**
 * @param {Number} N 돌의 개수
 * @returns {String} 상근이가 이기면 "SK", 창영이가 이기면 "CY" 리턴
 */
function solution(N) {
  return N % 2 === 0 ? "SK" : "CY";
}

const result = solution(N);
console.log(result);
