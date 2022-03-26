const solution = (n, directions) => {
  let pos = { x: 0, y: 0 };
  const dir = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };

  const outOfRange = (x, y) => x < 0 || x >= n || y < 0 || y >= n;

  for (const direction of directions) {
    const nx = pos.x + dir[direction][0];
    const ny = pos.y + dir[direction][1];

    if (!outOfRange(nx, ny)) {
      pos = { x: nx, y: ny };
    }
  }
  return [pos.x + 1, pos.y + 1];
};

console.log(solution(5, ["R", "R", "R", "U", "D", "D"]));
