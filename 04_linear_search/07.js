const findIndexOfElementIn2DArray = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === el) {
        return [i, j];
      }
    }
  }
  return null;
};

const data = [
  [1, 4, 45, 54, 56, 23],
  [3, 4, 435, 5, 65, 345, 56, 354, 654, 453, 56, 543, 6, 453, 54],
  [5, 6, 435, 564, 6, 345, 56, 53, 653, 23],
  [432, 435, 345, 234, 435],
  [345, 453, 63, 535, 653],
];

const result = findIndexOfElementIn2DArray(data, 63);
console.log({ result });
