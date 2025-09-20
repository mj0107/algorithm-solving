// 1197. 최소 스패닝 트리
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [V, E] = input.shift().split(' ').map(Number);
const graph = input.map((row) => row.split(' ').map(Number));

function getParent(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  return (parent[x] = getParent(parent, parent[x]));
}

function union(parent, a, b) {
  const parentA = getParent(parent, a);
  const parentB = getParent(parent, b);

  if (parentA < parentB) {
    parent[parentB] = a;
  } else {
    parent[parentA] = b;
  }
}

function solution() {
  const sortedWeight = [...graph].sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: V + 1 }, (_, i) => i);
  let totalWeight = 0;

  for (const [a, b, weight] of sortedWeight) {
    const parentA = getParent(parent, a);
    const parentB = getParent(parent, b);

    if (parentA !== parentB) {
      totalWeight += weight;
      union(parent, a, b);
    }
  }

  console.log(totalWeight);
}

solution();
