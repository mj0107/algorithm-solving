const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const NUMBER_LIST = input.map(el => +el);

const solution = () => {
  for(const num of NUMBER_LIST) {
    let result = 1;
    let len = 1;

    while(true) {
      // 모듈러 연산을 통해 숫자가 계속 커지지 않도록 한다.
      // 만약 나누어 떨어지는 수라면, 0이된다.
      result %= num;

      if(result === 0) {
        console.log(len);
        break;
      }

      result = result * 10 + 1;
      len++;
    }
  }
};

solution();