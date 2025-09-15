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
  const result = [];

  for (let testCase = 1; testCase <= T; testCase++) {
    const p = input[index++];
    const n = +input[index++];

    let numberList = JSON.parse(input[index++]).map(Number);

    let isReversed = false;
    let isError = false;

    for (const command of p) {
      if (command === 'R') {
        isReversed = !isReversed;
      } else if (command === 'D') {
        if (numberList.length === 0) {
          isError = true;
          break;
        }

        // 만약 뒤집힌 상태라면, 뒤집지 않고 뒤에서 하나 제거한다.
        if (isReversed) {
          numberList.pop();
        } else {
          // 뒤집힌 상태가 아니라면 앞에서 하나 제거한다.
          numberList.shift();
        }
      }
    }

    // 뒤집힌 상태이고, 에러가 나지 않았다면 뒤집어준다.
    if (isReversed && !isError) {
      numberList.reverse();
    }
    if (isError) {
      result.push('error');
    } else {
      result.push(numberList);
    }
  }

  // 배열을 그대로 출력하게 되면 양쪽 괄호([])가 보이지 않기 때문에 객체 자체를 문자열로 바꿔준다.
  console.log(
    result.map((el) => (el !== 'error' ? JSON.stringify(el) : el)).join('\n')
  );
}

solution();
