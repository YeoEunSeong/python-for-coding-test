const solution = (n, m, pos, board) => {
  let [x, y, dir] = pos;
  let canMove = true;

  const visited = Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = Array(m).fill(false);
  }

  visited[x][y] = true;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (canMove) {
    let innerCanMove = false;
    let nx = null;
    let ny = null;
    for (let i = 0; i < 4; i++) {
      dir = (dir - i + 4) % 4;

      nx = x + dx[dir];
      ny = y + dy[dir];

      if (!visited[nx][ny] && board[nx][ny] === 0) {
        innerCanMove = true;
        break;
      }
    }

    if (innerCanMove) {
      x = nx;
      y = ny;
      visited[nx][ny] = true;
    } else {
      dir = (dir + 2) % 4;

      nx = x + dx[dir];
      ny = y + dy[dir];

      if (board[nx][ny] === 1) {
        canMove = false;
      }
    }
  }

  return visited
    .map(elem => elem.filter(x => x).length)
    .reduce((prev, curr) => prev + curr, 0);
};

console.log(
  solution(
    4,
    4,
    [1, 1, 0],
    [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 1, 1],
    ]
  )
);
