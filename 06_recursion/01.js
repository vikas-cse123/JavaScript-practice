const printNumbers = (num) => {
  if (num > 1) printNumbers(num - 1);
  console.log({ num });
};
printNumbers(4);
