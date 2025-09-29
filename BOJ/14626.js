const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ISBN = input.shift();

function solution() {
  let sum = 0;
  let deletedIndex = 0;
  let result = 0;

  for (let i = 0; i < ISBN.length; i++) {
    if (ISBN[i] === '*') {
      deletedIndex = i;
      continue;
    }

    if (i % 2 === 0) {
      sum += Number(ISBN[i]);
    } else {
      sum += 3 * ISBN[i];
    }
  }

  const gap = (10 - (sum % 10)) % 10;

  if (deletedIndex % 2 === 0) {
    result = gap;
  } else {
    result = (gap * 7) % 10;
  }

  console.log(result);
}

solution();
