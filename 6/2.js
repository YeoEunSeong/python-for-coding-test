const solution = (n, nameAndScores) =>
  nameAndScores
    .map(elem => elem.split(" "))
    .sort((a, b) => a[1] - b[1])
    .map(([name, score]) => name)
    .join(" ");

console.log(solution(2, ["홍길동 95", "이순신 77"]));
