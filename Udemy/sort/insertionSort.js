const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // Choosing the first element in our unsorted subarray
    let j = i - 1; // The last element of our sorted subarray
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

console.log(insertionSort([2, 1, 9, 76, 4]));
