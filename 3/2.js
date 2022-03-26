const solution = (n, m, k, nums) => {
  let answer = 0;
  nums.sort((a, b) => b - a);

  const maxValue = nums[0];
  const nextValue = nums[1];

  answer =
    (maxValue * k + nextValue) * Math.floor(m / (k + 1)) +
    maxValue * (m % (k + 1));

  return answer;
};
