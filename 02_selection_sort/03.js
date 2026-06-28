const kthSmallestNumber = (arr,k) => {
    if(k < 1 || k > arr.length){
        return "Invalid k"
    }
    for(let i = 0;i < k ;i++){
        let smallestNumIdx = i
        for(let j = i+1; j < arr.length;j++){
            if(arr[j] < arr[smallestNumIdx]){
                smallestNumIdx = j
            }
        }

        if(smallestNumIdx !== i){
            const temp = arr[i]
            arr[i] = arr[smallestNumIdx]
            arr[smallestNumIdx] = temp 
        }

    }
    return arr[k-1]
}

console.log(kthSmallestNumber([9,4,7,1,3],3));