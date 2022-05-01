function areThereDuplicates(...args) {
  if (args.length <= 1) return false;
  const frequency = {};
  for (let i of args) {
    console.log(i);
    if (frequency[i] === undefined) {
      frequency[i] = 1;
      continue;
    }
    frequency[i]++;
  }
  for (let key in frequency) {
    if (frequency[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 3));

// 別解
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
// 別解 setを使う場合

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
