const sortByLength = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swaped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].length > arr[j + 1].length) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swaped = true;
      }
    }
    if (!swaped) break;
  }
  return arr;
};

const data = [
  "node.js",
  "ts",
  "mongodb",
  "python",
  "ruby on rails",
  "rust",
  "react.js",
  "next.js",
  "piper",
  "js",
  "je"
];
const result = sortByLength(data);
console.log(result);
