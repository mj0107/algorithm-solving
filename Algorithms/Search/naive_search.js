function naiveSearch(str, pattern) {
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) break;
      if (j === pattern.length - 1) cnt++;
    }
  }

  return cnt;
}

const result = naiveSearch("loled loled", "lol");
console.log(result);
