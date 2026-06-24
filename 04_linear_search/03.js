const lastOccurrence = (arr, el) => {
  for (let i = arr.length-1; i >= 0; i--) {
    if(arr[i] === el){
        return i
    }
    
}
return -1
};

console.log(lastOccurrence([9,34,42,42,567,54,34,2,4,5],34));


