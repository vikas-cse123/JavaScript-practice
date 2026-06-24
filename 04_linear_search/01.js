const linearSearch = (arr, el) => {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      console.log(`Found ${el} at index ${i}`);
      return;
    }
  }
  console.log(`${el} does not exist in the given array.`);
};

const input = [4, 2, 7, 1, 9];
linearSearch(input, 7);
