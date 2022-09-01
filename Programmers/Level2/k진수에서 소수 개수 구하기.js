function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }

  return true;
}

function solution(n, k) {
  const nums = n.toString(k).split("0");

  return nums.filter((el) => isPrime(el)).length;
}
