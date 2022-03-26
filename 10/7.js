const solution = (n, m, operations) => {
  let answer = [];
  const parents = Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    parents[i] = i;
  }

  const findParent = x => {
    if (x === parents[x]) {
      return x;
    }
    return (parents[x] = findParent(parents[x]));
  };

  const unionParents = (a, b) => {
    a = findParent(a);
    b = findParent(b);

    if (a < b) {
      parents[b] = a;
    } else {
      parents[a] = b;
    }
  };

  for (const [type, a, b] of operations) {
    if (type === 0) {
      unionParents(a, b);
    } else {
      answer = [...answer, findParent(a) === findParent(b)];
    }
  }
  return answer.map(x => (x ? "YES" : "NO"));
};
