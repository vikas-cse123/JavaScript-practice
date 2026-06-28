const power = (a, b) => {
  if (b === 0) return 1;
  return a * power(a, b - 1);
};

const result = power(2, 5);
console.log(result);
