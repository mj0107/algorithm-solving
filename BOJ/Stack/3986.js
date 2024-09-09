const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const wordList = input;

const solution = () => {
  const isGoodWord = (word) => {
    if (word.length % 2 === 1) {
      return false;
    }

    const stack = [];
    for (const ch of word) {
      if (stack.length === 0) {
        stack.push(ch);
        continue;
      }

      if (ch === stack.at(-1)) {
        stack.pop();
      } else {
        stack.push(ch);
      }
    }

    return stack.length === 0;
  };

  const result = wordList.filter((word) => isGoodWord(word)).length;

  console.log(result);
};

solution();
