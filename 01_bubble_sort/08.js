const sortArr = (arr) => {
  console.log({arr});
  for (let i = 0; i < arr.length - 1; i++) {
    let swaped = false
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if(arr[j].toLowerCase() > arr[j+1].toLowerCase()){
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


console.log(sortArr(['b','A','C','d']));

