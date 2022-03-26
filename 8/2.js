const solution = n => {
  if (n === 1) {
    return 1;
  }
  const dy = Array(n);
  dy[0] = 1;
  dy[1] = 3;

  for (let i = 2; i < n; i++) {
    dy[i] = (dy[i - 1] + dy[i - 2] * 2) % 796796;
  }

  return dy[n - 1];
};
