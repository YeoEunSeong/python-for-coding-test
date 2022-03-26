const solution = curr => {
  let answer = 0;
  const [cx, y] = curr.split("");
  const x = cx.charCodeAt(0) - 97;

  const moves = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [2, -1],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
  ];

  for (const [dx, dy] of moves) {
    const nx = x + dx;
    const ny = +y + dy;

    answer += 0 < nx && nx < 8 && 0 < ny && ny < 8 ? 1 : 0;
  }

  return answer;
};
