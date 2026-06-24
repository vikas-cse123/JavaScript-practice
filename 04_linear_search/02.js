const findFirstOccurrence = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }

  return -1;
};

console.log(findFirstOccurrence([3, 5, 3, 7, 3], 7));

