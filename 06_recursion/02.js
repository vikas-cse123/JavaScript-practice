const printNumberReverse = (num) => {
    console.log(num);
    if(num > 1) printNumberReverse(num-1)
}

printNumberReverse(400)