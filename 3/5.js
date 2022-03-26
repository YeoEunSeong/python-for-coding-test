const solution = (n, k) => {
  let cnt = 0;
  while (n > 1) {
    n = n % k === 0 ? n / k : n - 1;
    cnt += 1;
  }
  return cnt;
};

console.log(solution(25, 5));
