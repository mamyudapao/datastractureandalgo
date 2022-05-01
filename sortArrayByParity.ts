const sortArrayByParity = (nums: number[]): number[] => {
  let writePointer = nums.length - 1;
  while (nums[writePointer] % 2 != 0) {
    writePointer--;
  }

  for (let readPointer = 0; readPointer < writePointer; readPointer++) {
    if (nums[readPointer] % 2 != 0) {
      [nums[writePointer], nums[readPointer]] = [
        nums[readPointer],
        nums[writePointer],
      ];
      writePointer--;
      while (nums[writePointer] % 2 != 0) {
        writePointer--;
      }
    }
  }
  return nums;
};

console.log(sortArrayByParity([1, 0, 3]));
