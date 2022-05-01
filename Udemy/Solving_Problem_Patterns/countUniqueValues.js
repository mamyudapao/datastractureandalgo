const countUniqueValues = (arr) => {
  if (arr.length === 0) return;
  let counter = 1;
  let target = 0;
  let pointer = 0;
  while (pointer < arr.length) {
    if (arr[target] !== arr[pointer]) {
      counter++;
      target = pointer;
    }
    pointer++;
  }
  return counter;
};

console.log(countUniqueValues([1, 2, 2, 2, 3, 4, 5, 5, 5]));
console.log(countUniqueValues([1, 2, 3, 4, 5, 6]));
