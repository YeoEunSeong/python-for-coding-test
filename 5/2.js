const solution = (n, m, board) => {
  const route = Array(n);
  for (let i = 0; i < n; i++) {
    route[i] = Array(m).fill(0);
  }

  route[0][0] = 1;

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  const q = [[0, 0]];

  while (q.length) {
    const [x, y] = q.shift();
    if (x === n - 1 && y === m - 1) {
      return route[x][y];
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }
      if (board[nx][ny] === 1 && route[nx][ny] === 0) {
        route[nx][ny] = route[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
};

console.log(
  solution(5, 6, [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);
