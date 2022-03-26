const solution = N => {
  let answer = 0;
  answer += Math.floor(N / 500);
  N %= 500;

  answer += Math.floor(N / 100);
  N %= 100;

  answer += Math.floor(N / 50);
  N %= 50;

  answer += Math.floor(N / 10);
  N %= 10;

  return answer;
};

const solution2 = N => {
  let answer = 0;

  const coinTypes = [500, 100, 50, 10];
  for (const coin of coinTypes) {
    answer += Math.floor(N / coin);
    N %= coin;
  }

  return answer;
};
