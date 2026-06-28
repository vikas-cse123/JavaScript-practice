const sort2DArrayBySecondElement = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][1] < arr[smallestIdx][1]) {
        smallestIdx = j;
      }
    }

    if (i !== smallestIdx) {
        const temp = arr[i]
        arr[i] = arr[smallestIdx]
        arr[smallestIdx] = temp 
    }
  }
  return arr
};

const data = [
  [3, 9],
  [1, 4],
  [2, 5],
];
const result = sort2DArrayBySecondElement(data);

console.log(result);