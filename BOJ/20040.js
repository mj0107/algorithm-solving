const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const pointList = input.map((row) => row.split(' ').map(Number));

class UnionFind {
  constructor() {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }

  getParent(x) {
    if (this.parent[x] === x) {
      return x;
    }

    return (this.parent[x] = this.getParent(this.parent[x]));
  }

  union(a, b) {
    const aParent = this.getParent(a);
    const bParent = this.getParent(b);

    if (aParent < bParent) {
      this.parent[aParent] = bParent;
    } else {
      this.parent[bParent] = aParent;
    }
  }

  isCycle(a, b) {
    return this.getParent(a) === this.getParent(b);
  }
}

function solution() {
  let result = 0;
  const uf = new UnionFind();

  for (let i = 0; i < m; i++) {
    const turn = i + 1;
    const [p1, p2] = pointList[i];

    if (uf.isCycle(p1, p2)) {
      result = turn;
      break;
    }

    uf.union(p1, p2);
  }

  console.log(result);
}

solution();
