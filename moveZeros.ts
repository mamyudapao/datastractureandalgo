const moveZeroes = (nums: number[]) => {
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== 0) {
      [nums[writePointer], nums[readPointer]] = [
        nums[readPointer],
        nums[writePointer],
      ];
      writePointer++;
    }
  }
  return nums;
};
