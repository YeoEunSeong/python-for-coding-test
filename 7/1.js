// with binary search O(nlogn)
const solution1 = (n, arr, m, target) => {
  const answer = [];
  arr.sort((a, b) => a - b);

  const isIn = x => {
    let start = 0;
    let end = n;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (arr[mid] === x) {
        return "yes";
      } else if (arr[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return "no";
  };

  for (const x of target) {
    answer.push(isIn(x));
  }

  return answer.join(" ");
};

// with Set O(n)
const solution2 = (n, arr, m, target) => {
  let answer = [];
  const set = new Set(arr);

  for (const x of target) {
    answer = [...answer, set.has(x) ? "yes" : "no"];
  }

  return answer.join(" ");
};
