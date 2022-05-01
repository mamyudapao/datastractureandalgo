const isSubsequence = (str1, str2) => {
  let checkPointer = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] == str1[checkPointer]) checkPointer++;
  }
  return checkPointer === str1.length ? true : false;
};
