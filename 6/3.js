const solution = (n, k, arr, brr) => {
  arr.sort((a, b) => a - b);
  brr.sort((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    if (arr[i] > brr[i]) {
      break;
    }
    arr[i] = brr[i];
  }

  return arr.reduce((prev, curr) => prev + curr, 0);
};

console.log(solution(5, 3, [1, 2, 5, 4, 3], [5, 5, 6, 6, 5]));
