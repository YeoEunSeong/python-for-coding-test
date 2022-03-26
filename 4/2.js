const solution = n => {
  let answer = 0;
  for (let h = 0; h <= n; h++) {
    for (let m = 0; m <= 59; m++) {
      for (let s = 0; s <= 59; s++) {
        answer +=
          (h + "").includes("3") ||
          (m + "").includes("3") ||
          (s + "").includes("3")
            ? 1
            : 0;
      }
    }
  }
  return answer;
};
