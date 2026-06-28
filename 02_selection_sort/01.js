const selectionSortAsc = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestNumIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestNumIdx]) {
        smallestNumIdx = j;
      }
    }
    if (smallestNxumIdx !== i) {
      const temp = arr[i];
      arr[i] = arr[smallestNumIdx];
      arr[smallestNumIdx] = temp;
    }
  }
  return arr;
};

const data = [10198, 242, 229, 114, 99, 102, 333];
const result = selectionSortAsc(data);
console.log(data);
