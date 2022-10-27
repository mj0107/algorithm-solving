/* 보석 상자 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const colorList = input.map(Number);

function solution(N, M, colorList) {
  let min = 0;
  let max = Math.max(...colorList);

  let mid = 0;
  while (min <= max) {
    // mid는 나눠가질 갯수를 나타냄
    mid = Math.floor((min + max) / 2);

    let studentNum = 0;
    colorList.map((color) => {
      // 모든 보석을 다 나눠가져야 함
      // 만약 mid개씩 나눠가진다고 했을 때 나머지가 생긴다면
      // 다른 한명이 남은 개수를 가져야 하므로 올림을 해주어야 한다.
      studentNum += Math.ceil(color / mid);
    });

    // 구한 학생수가 문제에서 주어진 학생수보다 적을 경우
    // 큰 값으로 나눴다는 뜻이 되므로 mid를 작게해야 한다
    if (studentNum <= N) max = mid - 1;
    // 구한 학생수가 문제에서 주어진 학생수보다 많을 경우
    // 작은 값으로 나눴다는 뜻이 되므로 mid를 크게해야 한다
    else if (studentNum > N) min = mid + 1;
  }

  // min값과 max값이 비슷해질 때가 가장 균등하게 나눌 수 있을 때이다.
  // (while문에 적은 조건, min이 max 보다 커지면 종료)
  const RESULT = min;
  console.log(RESULT);
}

solution(N, M, colorList);
