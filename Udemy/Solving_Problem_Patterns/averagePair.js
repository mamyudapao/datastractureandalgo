function averagePair(arr, avg) {
  let start = 0;
  let end = arr.length - 1;
  let average = 0;
  while (start < end) {
    average = (arr[start] + arr[end]) / 2;
    if (average == avg) return true;
    average > avg ? end-- : start++;
  }
  return false;
}
