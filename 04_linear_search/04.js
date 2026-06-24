const countElementAppearence = (arr,el) => {
    let elementCount = 0 
    for(const element of arr){
        if(element === el) elementCount++

    }
return elementCount
}

console.log(countElementAppearence([2,1,1,2,2,3,2,4],2));


