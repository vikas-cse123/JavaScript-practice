const sortObjByProperty = (arr) => {
    for(let i = 0; i < arr.length-1;i++){
        let smallestIdx = i
        for(let j = i+1; j < arr.length;j++){
            if(arr[j].name.toLowerCase() < arr[smallestIdx].name.toLowerCase() ){
                smallestIdx = j
            }

        }
        if(smallestIdx !== i){
        let temp = arr[i]
        arr[i] = arr[smallestIdx]
        arr[smallestIdx] = temp

        }


    }
    return arr

}

const data = [{ name: "Charlie" }, { name: "zAlice" }, { name: "Bob" },{name:"akash"},{name:"zohn"}];
const result = sortObjByProperty(data)
console.log(result);