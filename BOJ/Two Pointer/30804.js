const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const N = +input.shift();
const fruitList = input.shift().split(' ').map(Number);

const MAX_NUMBER = 9;
const fruitCountArray = Array.from({ length: MAX_NUMBER + 1 }, () => 0);
let fruitTypeCount = 0;

function solution() {
  let maxLength = 1;
  let [start, end] = [0, 0];

  while (end < N) {
    const increaseFruitCountNumber = fruitList[end];

    fruitCountArray[increaseFruitCountNumber]++;
    if (fruitCountArray[increaseFruitCountNumber] === 1) {
      fruitTypeCount++;
    }

    end++;

    while (fruitTypeCount > 2) {
      const decreaseFruitCountNumber = fruitList[start];

      fruitCountArray[decreaseFruitCountNumber]--;
      if (fruitCountArray[decreaseFruitCountNumber] === 0) {
        fruitTypeCount--;
      }

      start++;
    }

    maxLength = Math.max(maxLength, end - start);
  }

  console.log(maxLength);
}

solution();
