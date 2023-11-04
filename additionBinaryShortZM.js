let binaryValueFirst = "5";
let binaryValueSecond = "11";

let convertedArray = convertToNumber(binaryValueFirst, binaryValueSecond);

function convertToNumber(binaryValueFirst, binaryValueSecond) {
  let arr = [binaryValueFirst, binaryValueSecond];
  for (let i = 0; i < 2; i++) {
    arr[i] = Number(arr[i]);
  }
  return arr;
}

let resultAddition = addition(convertedArray);

function addition(tabConvertToNumber) {
  let resultAddition = 0;
  for (let i = 0; i < tabConvertToNumber.length; i++) {
    resultAddition += tabConvertToNumber[i];
  }
  return resultAddition;
}
let resultBinary = convertToBinarySystem(resultAddition);

function convertToBinarySystem(resultAddition) {
  return resultAddition.toString(2);
}

let arrConvertBinary = convertToBinarySystemTab(convertedArray);
function convertToBinarySystemTab(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString(2);
  }
  return convertedArray;
}

let binaryData = checkBinaryLength(arrConvertBinary);
function checkBinaryLength(arrConvertBinary) {
  let binaryDataArray = [];
  for (let i = 0; i < arrConvertBinary.length; i++) {
    let binaryData = {
      binaryValue: arrConvertBinary[i],
      length: arrConvertBinary[i].length,
    };
    binaryDataArray.push(binaryData);
  }
  return binaryDataArray;
}

function displayResult(resultBinary) {
  let result = "0." + resultBinary;
  return result;
}
console.log(displayResult(resultBinary));
