const bubbleSortByProperty = (arr, property) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swaped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j][property] > arr[j + 1][property]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swaped = true;
      }
    }
    if (!swaped) break;
  }
  return arr;
};

const data = [
  { name: "C", age: 10 },
  { name: "L", age: 13 },
  { name: "E", age: 34 },
  { name: "D", age: 30 },
  { name: "B", age: 20 },
  { name: "A", age: 25 },
  { name: "G", age: 20 },
  { name: "F", age: 54 },
  { name: "I", age: 0 },
  { name: "H", age: 90 },
  { name: "J", age: 31 },
  { name: "K", age: 40 },
];

console.log(bubbleSortByProperty(data, "name"));
