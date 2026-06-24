const isArrayStrictlyIncreasing = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i+1] <= arr[i]){
        return false
    }
    
  }
  return true;
};

console.log(isArrayStrictlyIncreasing([11, 12, 13, 14, 15]));
