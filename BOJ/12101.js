// 12101 1, 2, 3 더하기 2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

const methodList = [];

function dfs(sum, numbers) {
  if (sum >= N) {
    if (sum === N) {
      methodList.push([...numbers]);
    }
    return;
  }

  for (let i = 1; i <= 3; i++) {
    numbers.push(i);
    dfs(sum + i, numbers);
    numbers.pop();
  }
}

function solution() {
  dfs(0, []);

  const result = methodList.map((method) => method.join('+')).at(K - 1) ?? -1;

  console.log(result);
}

solution();
