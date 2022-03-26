const solution = (n, k, nums) => {
  const dy = Array(k + 1).fill(Infinity);
  dy[0] = 0;

  for (const num of nums) {
    for (let i = num; i < k + 1; i++) {
      dy[i] = Math.min(dy[i], dy[i - num] + 1);
    }
  }

  return dy[k];
};

console.log(solution(2, 15, [2, 3]));
