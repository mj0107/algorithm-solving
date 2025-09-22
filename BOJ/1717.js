const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const opList = input.map((row) => row.split(' ').map(Number));

const parent = Array.from({ length: n + 1 }, (_, i) => i);

function getParent(x) {
  if (x === parent[x]) {
    return x;
  }

  return (parent[x] = getParent(parent[x]));
}

function union(a, b) {
  const parentA = getParent(a);
  const parentB = getParent(b);

  if (parentA < parentB) {
    parent[parentB] = parentA;
  } else {
    parent[parentA] = parentB;
  }
}

function isSameParent(a, b) {
  return getParent(a) === getParent(b);
}

function solution() {
  const result = [];

  for (const [op, a, b] of opList) {
    if (op === 0) {
      union(a, b);
    } else if (op === 1) {
      if (isSameParent(a, b)) {
        result.push('YES');
      } else {
        result.push('NO');
      }
    }
  }

  console.log(result.join('\n'));
}

solution();
