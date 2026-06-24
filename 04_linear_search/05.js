const allIdxOfElement = (arr,el) => {
    const indexes = []
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === el){
            indexes.push(i)

        }
    }

    return indexes

}

console.log(allIdxOfElement([5,7,5,9,5],5));

