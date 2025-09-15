const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

/*
양념치킨 A원, 후라이드 치킨 B원, 반반 치킨 C원
양념치킨 X마리, 후라이드 치킨 Y마리
반반치킨 2마리로 양념 1마리, 후라이드 1마리 가능
구매 금액의 최솟값은?
*/

function solution(testCase) {
  // 문자열로 된 item들을 number로 치환
  testCase = testCase.map(item => +item);
  let [a, b, c, x, y] = testCase;
  let result = 0;
  const min = Math.min(x, y);

  // 후라이드 한마리 + 양념 한마리보다 반반 2개가 저렴할때
  if(a+b > c*2) {
    result += min * (c*2);
    x -= min;
    y -= min;
  }

  // 반반 두마리에서 후라이드나 양념만 먹는다 하더라도,
  // 후라이드 한마리나 양념 한마리보다 더 저렴할 수가 있다.
  result += (x*Math.min(a, c*2) + y*Math.min(b, c*2));
  console.log(result);
}

solution(input);