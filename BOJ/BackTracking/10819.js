const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const A = input.shift().split(' ').map(Number);

/**
 * N개의 정수로 이루어진 배열 A에서 수의 순서를 적절히 바꿔서
 * 문제의 규칙을 적용해 얻을 수 있는 식의 최댓값을 구하는 함수
 *
 * @param {number} N 숫자 개수
 * @param {number[]} A 숫자 배열
 * @returns {number} 최대값
 */
function solution(N, A) {
  // 모든 경우의 수의 합을 중복없이 저장하기 위해 Set 선언
  let result = new Set();
  let visited = Array.from({ length: N + 1 }, () => false);
  let tmp = [];

  const DFS = (cnt) => {
    if (cnt === N) {
      // N개의 원소를 가진 경우의 수를 구했다면,
      let sum = 0;
      for (let i = 0; i < tmp.length - 1; i++) {
        sum += Math.abs(tmp[i] - tmp[i + 1]);
      }
      result.add(sum);
    } else {
      // 모든 조합 구하기
      for (let i = 0; i < N; i++) {
        if (!visited[i]) {
          // 방문한 원소가 아니라면
          visited[i] = true; // 방문 처리
          tmp.push(A[i]); // 방문한 원소 push
          DFS(cnt + 1);
          tmp.pop(); // back-tracking, 방문했던 원소 pop
          visited[i] = false; // 방문했던 원소 미방문 처리
        }
      }
    }
  };

  DFS(0);
  return Math.max(...result);
}

const result = solution(N, A);
console.log(result);
