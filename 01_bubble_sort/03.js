const bubbleSortString = (str) => {
  const strArr = str.split("");
  for (let i = 0; i < strArr.length - 1; i++) {
    let swaped = false;
    for (let j = 0; j < strArr.length - 1 - i; j++) {
      if (
        strArr[j].toLowerCase().charCodeAt() >
        strArr[j + 1].toLowerCase().charCodeAt()
      ) {
        const temp = strArr[j + 1];
        strArr[j + 1] = strArr[j];
        strArr[j] = temp;
        swaped = true;
      }
    }
    if (!swaped) break;
  }
  return strArr.join("");
};

const name = "Vikas";
const result = bubbleSortString(name);
console.log({ result });

