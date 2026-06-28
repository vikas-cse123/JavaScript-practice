const selectionSortDesc = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let biggestNumIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[biggestNumIdx]) {
        biggestNumIdx = j;
      }
    }
    if (biggestNumIdx !== i) {
      const temp = arr[i];
      arr[i] = arr[biggestNumIdx];
      arr[biggestNumIdx] = temp;
    }
  }
  return arr
};

const data = [101, 42, 229, 114, 99, 102, 333];
const result = selectionSortDesc(data);
console.log(result);
