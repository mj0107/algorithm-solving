const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const inputTestCase = input[0];

function solution(testCase) {
  let result = 1;
  let maxC = 26; // a~z
  let maxD = 10; // 0~9

  if(testCase[0] == 'c') result = maxC;
  else if(testCase[0] == 'd') result = maxD;

  for(let i=1; i<testCase.length; i++) {
    let multi;
    let current = testCase[i];
    let prev = testCase[i-1];

    if(current === 'c') multi = maxC;
    else multi = maxD;

    if(current === prev) multi--;
      result *= multi;
  }

  console.log(result);
}

solution(inputTestCase);