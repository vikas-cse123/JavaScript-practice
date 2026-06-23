const sort2DArray = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swaped = false
    for (let j = 0; j < arr.length - 1-i; j++) {
        if(arr[j][0] > arr[j+1][0]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            swaped = true
        }
    }
    if(!swaped) break
  }
  return arr
};

console.log(sort2DArray([
  [3, "c"],
  [1, "a"],
  [2, "b"],
]));
