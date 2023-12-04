/**
 * @param {string} num
 * @return {string}
 */
const largestGoodInteger = (num) => {
  let result = '';
  let substring;

  for (let i = 0; i < num.length - 2; i++) {
    substring = num.slice(i, i + 3);

    if (checkGoodInteger(substring) === true) {
      result = Math.max(result === '' ? 0 : result, parseInt(substring));
    }
  }

  result = formatResult(result);
  return result;
};

const checkGoodInteger = (substring) => {
  return (
    substring.at(0) === substring.at(1) && substring.at(1) === substring.at(2)
  );
};

const formatResult = (result) => {
  if(result === 0) {
    return '000';
  }

  return `${result}`;
};