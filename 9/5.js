const solution = (n, m, c, routes) => {
  const dist = Array(n + 1).fill(Infinity);

  const graph = Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    graph[i] = [];
  }

  for (const [from, to, cost] of routes) {
    graph[from].push([to, cost]);
  }

  const getNext = () => {
    let val = Infinity;
    let index = 0;
    for (let i = 1; i < n + 1; i++) {
      if (dist[i] < val) {
        index = i;
        val = dist[i];
      }
    }
    return index;
  };

  const dijkstra = start => {
    const visited = Array(n + 1).fill(false);
    dist[start] = 0;
    visited[start] = true;

    for (const [to, cost] of graph[start]) {
      dist[to] = cost;
      visited[to] = true;
    }

    for (let i = 0; i < n - 1; i++) {
      const next = getNext();
      for (const [to, cost] of graph[next]) {
        if (!visited[to]) {
          dist[to] = cost;
          visited[to] = true;
        }
      }
    }
  };

  dijkstra(c);

  const res = dist.filter(d => 0 < d && d !== Infinity);
  return [res.length, Math.max(...res)];
};
