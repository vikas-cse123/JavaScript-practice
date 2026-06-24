const findString = (arr, char) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith(char)) {
      return arr[i];
    }
  }
  return null;
};
console.log(findString(["apple", "ball", "cat", "apply"],"c"));
