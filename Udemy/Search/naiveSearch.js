// const naiveSearch = (str, targetStr) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < targetStr.length; j++) {
//       if (targetStr[j] !== str[i + j]) break;
//       if (j === targetStr.length - 1) count++;
//     }
//   }
//   return count;
// };

const naiveSearch = (str, targetStr) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < targetStr.length; j++) {
      if (targetStr[j] !== str[i + j]) break;
      if (j === targetStr.length - 1) count++;
    }
  }
  return count;
};
