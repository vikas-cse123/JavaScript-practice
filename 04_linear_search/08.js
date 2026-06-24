const findMinimumValue = (arr) => {
  let smallestValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestValue) {
      smallestValue = arr[i];
    }
  }
  return smallestValue;
};

console.log(findMinimumValue([9, 3, 5, 10, 7]));
