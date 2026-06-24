const searchObj = (arr,id) => {
    for(let i = 0; i < arr.length;i++){
        if(arr[i].id === id){
            return arr[i]
        }
    }
    return null
}

const data = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];
console.log(searchObj(data,20));



