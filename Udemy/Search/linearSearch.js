const linearSearch = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
};

console.log(linearSearch([2, 3, 4, 5, 6, 7], 7));
