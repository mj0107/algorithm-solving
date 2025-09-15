/* 커트라인 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, k] = input.shift().split(" ").map(Number);
const x = input.shift().split(" ").map(Number);

/**
 * 각 학생의 점수가 담긴 x 배열에서
 *
 * k명이 상을 받을 수 있는 커트라인 점수를 구하는 함수
 * @param {Number} k 상을 받는 사람의 수
 * @param {Number[]} x 각 학생의 점수
 * @returns {Number} 커트라인 점수
 */
function solution(k, x) {
  return x.sort((a, b) => b - a).at(k - 1);
}

const result = solution(N, k, x);
console.log(result);
