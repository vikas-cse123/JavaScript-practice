const sortChar = (arr) => {
    for(let i = 0; i < arr.length -1 ;i++){
        let smallestIdx = i
        for(let j = i+1; j < arr.length;j++){
            if(arr[j] < arr[smallestIdx]){
                smallestIdx = j
            }
        }

        if(i !== smallestIdx){
            const temp = arr[i]
            arr[i] = arr[smallestIdx]
            arr[smallestIdx] = temp
        }
    }
return arr
}

const input = ['d','A','c','B']
const result = sortChar(input)
console.log(result);


