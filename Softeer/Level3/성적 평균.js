const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  const [studentCount, rangeCount] = input[0].split(' ').map(Number);
  const scoreList = input[1].split(' ').map(Number);
  const rangeList = input.slice(2).map((range) => range.split(' ').map(Number));

  for (const [start, end] of rangeList) {
    let sum = 0;
    for (let i = start - 1; i < end; i++) {
      sum += scoreList[i];
    }

    const average = (sum / (end - start + 1)).toFixed(2);

    console.log(average);
  }
});
