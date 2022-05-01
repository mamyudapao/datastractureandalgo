var validAnagram = (str1, str2) => {
  const frequencyArr1 = {};
  const frequencyArr2 = {};

  for (let s of str1) {
    if (frequencyArr1[s] === undefined) {
      frequencyArr1[s] = 1;
      continue;
    }
    frequencyArr1[s]++;
  }

  for (let s of str2) {
    if (frequencyArr2[s] === undefined) {
      frequencyArr2[s] = 1;
      continue;
    }
    frequencyArr2[s]++;
  }

  console.log(frequencyArr1, frequencyArr2);

  for (let s in frequencyArr1) {
    if (frequencyArr2[s] !== frequencyArr1[s]) {
      return false;
    }
  }
  return true;
};

// review
var validAnagram = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const counter1 = {};
  const counter2 = {};

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  console.log(counter1, counter2);
  for (let key in counter1) {
    if (!counter2.hasOwnProperty(key)) return false;
    if (counter1[key] !== counter2[key]) return false;
  }
  return true;
};

console.log(validAnagram("abc", "cba"));
console.log(validAnagram("abccccs", "ssfetrt"));
