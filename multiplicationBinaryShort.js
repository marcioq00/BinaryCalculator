let binaryValueFirst = "10";
let binaryValueSecond = "5";

let convertedArray = convertToNumber(binaryValueFirst, binaryValueSecond);
let resultMultiplication = multiplication(convertedArray);
convertToBinarySystem(binaryValueFirst, binaryValueSecond);
console.log(convertToBinarySystem(resultMultiplication));

function convertToBinarySystem(resultMultiplication) {
  return resultMultiplication.toString(2);
}

function convertToNumber(binaryValueFirst, binaryValueSecond) {
  let arr = [binaryValueFirst, binaryValueSecond];
  for (let i = 0; i < 2; i++) {
    arr[i] = Number(arr[i]);
  }
  return arr;
}

function multiplication(convertedArray) {
  let result = 1;
  for (let i = 0; i < convertedArray.length; i++) {
    result *= convertedArray[i];
  }
  return result;
}

// pozwolic uzytkownikowi na wprowadzenie wiecej niz dwoch wartosci
