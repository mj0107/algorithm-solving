function solution(k, d) {
  const getY = (x) => {
    return Math.floor(Math.sqrt(d * d - x * x));
  };

  let result = 0;
  for (let x = 0; x <= d; x += k) {
    const maxY = getY(x);
    result += Math.floor(maxY / k) + 1;
  }

  return result;
}
