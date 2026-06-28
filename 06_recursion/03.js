// let result = 1
// const factorial = (num) => {
// result= result * num
// if(num >2) factorial(num-1)
// }

// factorial(5)
// console.log({result});


// let result2 = 1
// const factorial2 = (num) => {
//     if(num > 2) factorial2(num-1)
//     result2 = result2 * num

// }
// factorial2(4)
// console.log({result2});



const factorial = (num) => {
    if(num <= 1) return 1
    return num * factorial(num-1)

}
debugger
factorial(5)

