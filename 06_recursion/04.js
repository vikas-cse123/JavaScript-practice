const sum = (num) => {
    if(num <= 0) throw new Error('Only natural numbers allowed')
  if (num === 1) return 1;
  return num + sum(num - 1);
};

console.log(sum(4));

