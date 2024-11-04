const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

function solution() {
  let nextNumber;

  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      nextNumber = Number(input[i]) + 3 - i;
      break;
    }
  }

  const result = getNext(nextNumber);
  console.log(result);
}

function getNext(nextNumber) {
  if (nextNumber % 3 === 0 && nextNumber % 5 === 0) {
    return 'FizzBuzz';
  }
  if (nextNumber % 3 === 0 && nextNumber % 5 !== 0) {
    return 'Fizz';
  }
  if (nextNumber % 3 !== 0 && nextNumber % 5 === 0) {
    return 'Buzz';
  }

  return nextNumber;
}

solution();
