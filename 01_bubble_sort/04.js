let nums = [10, 9, 80, 7, 61, 0, -4, 300, 2, 1];
const bubbleSortSwapCount = (arr) => {
 let swapCount = 0
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
        swapCount++
      }
    }
    if (!swapped) break;
  }
  return {swapCount};
};


console.log(bubbleSortSwapCount(nums));