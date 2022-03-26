const solution = (n, m, nums) => {
  let answer = 0;
  let start = 0;
  let end = 2000000000;

  const get = x =>
    nums
      .map(elem => (elem > x ? elem - x : 0))
      .reduce((prev, curr) => prev + curr, 0);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (get(mid) < m) {
      end = mid - 1;
    } else {
      answer = mid;
      start = mid + 1;
    }
  }
  return answer;
};

console.log(solution(4, 6, [19, 15, 10, 17]));
