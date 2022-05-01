const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let writePointer = 0;
  for (let readPointer = 1; readPointer < arr.length; readPointer++) {
    if (arr[writePointer] !== arr[readPointer]) {
      writePointer++;
      arr[writePointer] = arr[readPointer];
    }
  }
  return writePointer + 1;
};

console.log(countUniqueValues([1, 2, 2, 3, 4, 5, 5, 6]));

console.log(countUniqueValues([1, 2, 3, 4, 5, 5, 6]));
