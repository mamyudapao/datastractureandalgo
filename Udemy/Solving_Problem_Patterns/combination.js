const n = 10;
const r = 3;
let result = 1;

for (let i = 0; i < r; i++) {
  result *= (n - i) / r - i;
}

console.log(result);
