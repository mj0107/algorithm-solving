/* 균형잡힌 세상 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

function solution(input) {
  let result = [];
  const BRACKET_PAIR = {
    ')': '(',
    ']': '[',
  };

  for (const STRING of input) {
    let stack = [];

    let cur = '';
    for(let i=0; i<STRING.length; i+=1) {
      cur = STRING[i];

      // 괄호가 아니라면 검사 x
      if('()[]'.includes(cur) === false) {
        continue;
      }

      // 여는 괄호라면 stack에 push
      if(Object.values(BRACKET_PAIR).includes(cur)) {
        stack.push(cur);
      }
      // 닫는 괄호라면,
      if(cur in BRACKET_PAIR) {
        // stack의 top과 쌍을 이룬다면 짝이 맞으므로 stack에서 pop
        if(stack.at(-1) === BRACKET_PAIR[cur]) {
          stack.pop();
        }
        // stack의 top과 쌍을 이루지 않는다면 그냥 push
        else {
          stack.push(cur);
        }
      }
    }

    // 짝이 맞아서 다 제거가 되었다면 stack의 길이는 0이므로 'yes'
    result.push(stack.length === 0 ? 'yes' : 'no');
  }

  console.log(result.join('\n'));
}

solution(input);
