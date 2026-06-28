const selectionSortAsc = (arr) => {
  let count = 0
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestNumIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestNumIdx]) {
        smallestNumIdx = j;
        count++
      }
    }
    if (smallestNumIdx !== i) {
      const temp = arr[i];
      arr[i] = arr[smallestNumIdx];
      arr[smallestNumIdx] = temp;
    }
  }
  return count;
};

const data = [10198, 242, 229, 114, 99, 102, 333];
const result = selectionSortAsc(data);
console.log(result);
