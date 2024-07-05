const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const M = +input.shift();
const opList = input.map((row) => row.split(' '));

let S = 0;
const result = [];

const add = (x) => {
  S |= 1 << x;
};

const remove = (x) => {
  S &= ~(1 << x);
};

const check = (x) => {
  result.push((S >> x) & 1);
};

const toggle = (x) => {
  S ^= 1 << x;
};

const all = () => {
  S = (1 << 21) - 1;
};

const empty = () => {
  S = 0;
};

const solution = () => {
  for (let i = 0; i < opList.length; i++) {
    const op = opList[i][0].trim();
    // 1을 이용해서 x만큼 shift로 해당 위치의 bit를 찾아서 연산하기 때문에,
    // 마치 배열이 1이 아니라 0부터 시작한다고 생각하고 1을 빼주었다.
    // x가 1일때 1 << 0 이기 때문이다.
    let x = parseInt(opList[i][1]) - 1;

    switch (op) {
      case 'add':
        add(x);
        break;
      case 'remove':
        remove(x);
        break;
      case 'check':
        check(x);
        break;
      case 'toggle':
        toggle(x);
        break;
      case 'all':
        all();
        break;
      case 'empty':
        empty();
        break;
    }
  }

  console.log(result.join('\n'));
};

solution();
