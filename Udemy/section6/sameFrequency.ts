const sameFrequency = (num1, num2) => {
  const counter1 = {};
  const counter2 = {};

  for (let i of num1.toString()) {
    if (!counter1[i]) {
      counter1[i] = 1;
      continue;
    }
    counter1[i]++;
  }
  for (let i of num2.toString()) {
    if (!counter2[i]) {
      counter2[i] = 1;
      continue;
    }
    counter2[i]++;
  }

  for (let i in counter1) {
    if (counter1[i] !== counter2[i]) return false;
  }
  return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
