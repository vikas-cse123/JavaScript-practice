// / Best Time Complexity O(N)
// Worst Time CompLexity O(N^2)


let nums = [10, 9, 80, 7, 61, 0, -4, 300, 2, 1];
// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bubbleSortAsc = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};

const result = bubbleSortAsc(nums);
console.log(result);

