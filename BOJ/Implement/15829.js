const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const L = +input.shift();
const str = input.shift();

const solution = () => {
  const r = 31;
  const M = 1234567891;

  let hash = 0;
  let powerOfR = 1;

  const getAlphabetHashValue = (alphabet) => {
    return alphabet.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  };

  for (let i = 0; i < L; i++) {
    const alphabet = str.charAt(i);

    hash = (hash + getAlphabetHashValue(alphabet) * powerOfR) % M;
    powerOfR = (powerOfR * r) % M;
  }

  console.log(hash);
};

solution();
