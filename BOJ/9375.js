const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

let index = 0;
const T = +input[index++];

function solution() {
  let result = [];

  for (let testCase = 1; testCase <= T; testCase++) {
    const n = +input[index++];
    const wearList = input.slice(index, index + n).map((el) => el.split(' '));
    index += n;

    const wearMap = new Map();
    for (const [_, type] of wearList) {
      if (wearMap.has(type)) {
        wearMap.set(type, wearMap.get(type) + 1);
      } else {
        wearMap.set(type, 1);
      }
    }

    // (종류 각각 선택할 경우 + 1(아무것도 선택하지 않을 경우))를 다 곱해준뒤,
    // 전부 선택하지 않을 경우 하나를 빼준다.
    let days =
      Array.from(wearMap.values()).reduce((acc, cur) => acc * (cur + 1), 1) - 1;

    result.push(days);
  }

  console.log(result.join('\n'));
}

solution();
