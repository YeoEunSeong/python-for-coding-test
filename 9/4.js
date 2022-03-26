const solution = (n, m, routes, x, k) => {
  const dist = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dist[i] = Array(n + 1).fill(Infinity);
  }

  for (let i = 1; i <= n; i++) {
    dist[i][i] = 0;
  }

  for (const [from, to] of routes) {
    dist[from][to] = 1;
    dist[to][from] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
      }
    }
  }

  const answer = dist[1][k] + dist[k][x];
  return answer === Infinity ? -1 : answer;
};
