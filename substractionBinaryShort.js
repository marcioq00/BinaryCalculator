let binaryValueFirst = "10";
let binaryValueSecond = "5";

let convertedArray = convertToNumber(binaryValueFirst, binaryValueSecond);
let resultAddition = Addition(convertedArray);

convertToBinarySystem(binaryValueFirst, binaryValueSecond);
console.log(convertToBinarySystem(resultAddition));

function convertToBinarySystem(resultAddition) {
  return resultAddition.toString(2);
}

function convertToNumber(binaryValueFirst, binaryValueSecond) {
  let arr = [binaryValueFirst, binaryValueSecond];
  for (let i = 0; i < 2; i++) {
    arr[i] = Number(arr[i]);
  }
  return arr;
}

function Addition(convertedArray) {
  let result = convertedArray[0];
  for (let i = 1; i < convertedArray.length; i++) {
    result -= convertedArray[i];
  }
  return result;
}
// co kiedy wynik będzie ujemny
