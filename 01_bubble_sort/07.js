let nums = [10, 9, 80, 7, 61, 0, -4, 300, 2, 1];
const bubbleSortComparsionCount = (arr) => {
  let comparsionCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      comparsionCount++;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return { comparsionCount };
};

console.log(bubbleSortComparsionCount(nums));
