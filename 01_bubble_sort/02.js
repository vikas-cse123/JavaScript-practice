// / Best Time Complexity O(N)
// Worst Time CompLexity O(N^2)


const nums = [1, 2, 30, 4, 5, 16, 70, 81, 93, 10];
const bubbleSortDesc = (arr) => {
    console.log({arr});
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
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

const result = bubbleSortDesc(nums);
console.log(result);

