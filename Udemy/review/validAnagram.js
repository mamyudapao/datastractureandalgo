// ふたつの配列を比較する系は、frequently counter pattern

const validAnagram = (str1, str2) => {
  const frequencyArr1 = {};
  const frequencyArr2 = {};

  if (str1.length !== str2.length) return false;

  for (let i of str1) {
    if (frequencyArr1[i] === undefined) {
      frequencyArr1[i] = 1;
      continue;
    }
    frequencyArr1[i]++;
  }
  for (let i of str2) {
    if (frequencyArr2[i] === undefined) {
      frequencyArr2[i] = 1;
      continue;
    }
    frequencyArr2[i]++;
  }
  console.log(frequencyArr1, frequencyArr2);
  for (let key in frequencyArr1) {
    if (frequencyArr1[key] !== frequencyArr2[key]) return false;
  }
  return true;
};

console.log(validAnagram("aadf", "fer")); // false
console.log(validAnagram("adsf", "asfd"));
