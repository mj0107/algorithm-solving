const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

function* idGenerator() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

class UnionFind {
  constructor() {
    this.parent = [];
    this.count = [];
    this.nameMap = new Map();
    this.idGenerator = idGenerator();
  }

  getId(name) {
    if (!this.nameMap.has(name)) {
      const newId = this.idGenerator.next().value;

      this.nameMap.set(name, newId);
      this.parent.push(newId);
      this.count.push(1);
    }

    return this.nameMap.get(name);
  }

  getParent(id) {
    if (this.parent[id] === id) {
      return id;
    }

    return (this.parent[id] = this.getParent(this.parent[id]));
  }

  union(id1, id2) {
    const rootId1 = this.getParent(id1);
    const rootId2 = this.getParent(id2);

    if (rootId1 === rootId2) {
      return this.count[rootId1];
    }

    if (this.count[rootId1] < this.count[rootId2]) {
      this.parent[rootId1] = rootId2;
      this.count[rootId2] += this.count[rootId1];
    } else {
      this.parent[rootId2] = rootId1;
      this.count[rootId1] += this.count[rootId2];
    }

    return this.count[this.getParent(id1)];
  }
}

function solution() {
  const result = [];

  for (let testCase = 0; testCase < T; testCase++) {
    const F = +input.shift();
    const uf = new UnionFind();

    for (let i = 0; i < F; i++) {
      const [user1, user2] = input.shift().split(' ');

      const user1Id = uf.getId(user1);
      const user2Id = uf.getId(user2);

      const count = uf.union(user1Id, user2Id);

      result.push(count);
    }
  }

  console.log(result.join('\n'));
}

solution();
