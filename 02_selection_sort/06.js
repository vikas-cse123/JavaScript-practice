const kLargestElements = (arr, k) => {
  if (k < 1 || k > arr.length) {
    return "Invalid k";
  }
  for (let i = 0; i < k; i++) {
    let biggestNumIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[biggestNumIdx]) {
        biggestNumIdx = j;
      }
    }
    if (i !== biggestNumIdx) {
      const temp = arr[i];
      arr[i] = arr[biggestNumIdx];
      arr[biggestNumIdx] = temp;
    }
  }
  return arr.slice(0, k);
};

const data = [5, 1, 9, 3, 7];
const result = kLargestElements(data, 20);
console.log(result);
