const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const T = +input.shift();

function solution() {
  for (let testCase = 1; testCase <= T; testCase++) {
    const [M, N, x, y] = input.shift().split(' ').map(Number);

    // 총 연도의 수는 최소공배수이다.
    const lcm = getLCM(M, N);
    let year = x;

    while (true) {
      // 총 가능한 연수를 넘어가면 불가능하다.
      if (year > lcm) {
        console.log(-1);
        break;
      }
      // year % N === y 로 비교를 하게 되면 year가 0이 나올 수 있다.
      // 연도는 1부터 시작하기 때문에 0이 나오지 않도록 나머지가 0 ~ (year - 1)이 나오도록 해준뒤,
      // 1을 더해서 1 ~ year가 나올 수 있도록 해준다.
      if (((year - 1) % N) + 1 === y) {
        console.log(year);
        break;
      }

      // x는 고정이라고 생각하고, x의 주기는 M년이기 때문에 M씩 더해준다.
      year += M;
    }
  }
}

function getGCD(a, b) {
  if (b === 0) return a;

  return getGCD(b, a % b);
}

function getLCM(a, b) {
  return (a * b) / getGCD(a, b);
}

solution();
