const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const A = input.shift().split(' ').map(Number);
const [B, C] = input.shift().split(' ').map(Number);

function solution() {
  let min = 0;

  A.forEach((examinee) => {
    // 총감독관은 무조건 1명 배치한다.
    min += 1;

    // 남은 응시생이 양수라면, 부감독관을 배치해서 감시한다.
    if (examinee - B > 0) {
      min += Math.ceil((examinee - B) / C);
    }
  });

  console.log(min);
}

solution();
