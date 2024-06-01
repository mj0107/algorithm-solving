/**
 * @param {string} s
 * @return {number}
 */
const scoreOfString = (s) => {
  const asciiList = [...s].map((el) => el.charCodeAt());

  let result = 0;
  for (let i = 0; i < asciiList.length - 1; i++) {
    const cur = asciiList[i];
    const next = asciiList[i + 1];

    result += Math.abs(cur - next);
  }

  return result;
};
