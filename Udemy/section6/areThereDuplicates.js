// const areThereDuplicates = (...args) => {
//   const counter1 = {};
//   for (const value of args) {
//     if (!counter1[value]) {
//       counter1[value] = 1;
//       continue;
//     }
//     counter1[value]++;
//   }
//   console.log(counter1);
//   for (const key in counter1) {
//     if (counter1[key] >= 2) return true;
//   }
//   return false;
// };

const areThereDuplicates = (...args) => {
  let target = 0;
  if (typeof args[0] === "string") {
    args.sort();
  } else {
    args.sort((a, b) => a - b);
  }
  for (let pointer = 1; pointer < args.length; pointer++) {
    if (args[target] === args[pointer]) return true;
    target = pointer;
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "d", "a"));
