/* 용돈 관리 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const moneys = input.map((el) => +el);

function solution() {
  let K = 0;
  let left = Math.max(...moneys);
  // M이 1인데 100000일동안 10000원씩 쓸 경우의 최댓값
  let right = 100000 * 10000;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cnt = 0;
    let remain = 0;

    for (let i = 0; i < N; i++) {
      if (remain < moneys[i]) {
        // 남은돈이 쓸돈보다 작다면
        cnt++; // 인출횟수 증가
        remain = mid - moneys[i]; // 인출한 돈에서 쓸돈을 빼줌
      } else remain -= moneys[i];
    }

    if (cnt > M) left = mid + 1;
    else {
      K = mid;
      right = mid - 1;
    }
  }

  console.log(K);
}

solution();
