/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

/* 
    < example >
    123 * 456

          1  2  3
       *  4  5  6
    ----------------
             1  8
          1  2
          6
    ----------------
          1  5     
       1  0
       5
    ----------------
       1  2
       8
    4
    ----------------
  = 5  6  0  8  8
*/
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  let digitList = Array.from({ length: num1.length + num2.length }, () => 0);

  let [curNum1, curNum2] = [0, 0];
  let [idx1, idx2] = [0, 0];
  let carry = 0;
  let sum = 0;
  for (let i = num2.length - 1; i >= 0; i -= 1) {
    curNum2 = Number(num2[i]);
    for (let j = num1.length - 1; j >= 0; j -= 1) {
      curNum1 = Number(num1[j]);

      // i와 j는 각 숫자의 자릿수를 나타냄
      // 한자리 수 * 한자리 수 = 한자리 수 || 두자리 수
      // 따라서 두 자리수를 확보해놓고 진행
      idx1 = i + j;
      idx2 = i + j + 1;

      sum = digitList[idx2] + curNum1 * curNum2;
      digitList[idx2] = sum % 10;
      // 만약 두 자리수가 되면 올림수를 윗 자리에다가 더해줌
      carry = Math.floor(sum / 10);
      digitList[idx1] += carry;
    }
  }

  // 맨 앞에 올림수가 없어서 기존에 설정해놓은 0이 그대로 있을 경우,
  // shift()로 없애줌
  if (digitList[0] === 0) {
    digitList.shift();
  }

  return digitList.join('');
};
