const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start];
  var swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
    }
  }
};

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

const quickSock = () => {};
