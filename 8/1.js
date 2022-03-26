const solution = (n, nums) => {
  const dy = Array(n).fill(0);

  dy[0] = nums[0];
  dy[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dy[i] = Math.max(dy[i - 1], dy[i - 2] + nums[i]);
  }

  return dy[n - 1];
};
