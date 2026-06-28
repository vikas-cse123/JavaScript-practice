// let num = 0;
// function a() {
//   num++;
//   console.log(num);
//   if (num < 4) a();
// }
// debugger
// a();
let num = 0
const printNumbers = (target) => {
  console.log({target});
    num++
    console.log({num});
    if(num < target) printNumbers(target)


}


printNumbers(6)
//a
//a
//a
//
/**
 *
 *
 *
 */
