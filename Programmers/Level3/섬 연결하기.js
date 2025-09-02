function findParent(parent, n) {
  if (n === parent[n]) {
    return n;
  }

  parent[n] = findParent(parent, parent[n]);
  return parent[n];
}

function unionParent(parent, x, y) {
  const a = findParent(parent, x);
  const b = findParent(parent, y);

  if (a < b) {
    parent[a] = b;
  } else {
    parent[b] = a;
  }

  return parent;
}

function solution(n, costs) {
  const sortedCosts = [...costs].sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  let minCost = 0;

  for (const [x, y, cost] of sortedCosts) {
    const rootX = findParent(parent, x);
    const rootY = findParent(parent, y);

    if (rootX !== rootY) {
      unionParent(parent, rootX, rootY);

      minCost += cost;
    }
  }

  return minCost;
}
