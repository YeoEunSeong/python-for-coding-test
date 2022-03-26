const solution = (n, m, nums) => Math.max(...nums.map(num => Math.min(...num)));

console.log(
  solution(3, 3, [
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ])
);
