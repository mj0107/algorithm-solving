const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const S = input[0];

function solution() {
  let zeroGroupCount = 0;
  let oneGropCount = 0;

  // 첫 숫자에 맞는 그룹 카운트 증가
  if (S[0] === '0') {
    zeroGroupCount++;
  } else {
    oneGropCount++;
  }

  for (let i = 1; i < S.length; i++) {
    const prev = S[i - 1];
    const cur = S[i];

    // 만약 현재 숫자와 이전의 숫자가 같다면,
    // 같은 그룹이므로 continue
    if (cur === prev) {
      continue;
    }

    // 현재 숫자와 이전의 숫자가 같지않고,
    // 현재 숫자가 0이라면 새로운 0그룹 카운트
    if (cur === '0') {
      zeroGroupCount++;
    } else {
      // 현재 숫자가 1이라면 새로운 1그룹 카운트
      oneGropCount++;
    }
  }

  // 더 적은 그룹을 뒤집어주면 된다.
  console.log(Math.min(zeroGroupCount, oneGropCount));
}

solution();
