const findElementGreaterThanX = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) {
      return arr[i];
    }
  }
  return null;
};
