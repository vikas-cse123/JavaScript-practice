const bubbleSortKPasses = (arr, k) => {
  for (let i = 0; i < k && i < arr.length-1; i++) {
    let swaped = false
    for(let j = 0; j < arr.length-1-i;j++){
      if(arr[j] > arr[j+1]){
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        swaped = true
      }

    }
    if(!swaped) break
  }
  return arr
};

console.log(bubbleSortKPasses([180, 99, 80, 70, 63, 59, 43, 31], 70));
