// const binarySearch = (arr, target) => {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     const middle = Math.floor((start + end) / 2);

//     if (arr[middle] === target) return middle;

//     if (arr[middle] > target) end = middle - 1;

//     if (arr[middle] < target) start = middle + 1;
//   }
//   return -1;
// };

// console.log(binarySearch([1, 2, 3, 4, 5, 20], 20));

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) return middle;
    if (arr[middle] > target) end = middle - 1;
    if (arr[middle] < target) start = middle + 1;
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 20], 20));
