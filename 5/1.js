const solution = (n, m, board) => {
  let answer = 0;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const dfs = (x, y) => {
    board[x][y] = -1;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m || board[nx][ny] !== 0) {
        continue;
      }

      dfs(nx, ny);
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) {
        dfs(i, j);
        answer += 1;
      }
    }
  }

  return answer;
};

console.log(
  solution(4, 5, [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ])
);
