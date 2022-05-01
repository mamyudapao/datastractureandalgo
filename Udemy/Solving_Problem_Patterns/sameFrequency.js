const sameFrequency = (num1, num2) => {
  const frequency1 = {};
  const frequency2 = {};
  for (let i of num1.toString()) {
    if (frequency1[i] === undefined) {
      frequency1[i] = 1;
      continue;
    }
    frequency1[i]++;
  }
  for (let i of num2.toString()) {
    if (frequency2[i] === undefined) {
      frequency2[i] = 1;
      continue;
    }
    frequency2[i]++;
  }
  console.log(frequency1, frequency2);
  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) return false;
  }
  return true;
};
