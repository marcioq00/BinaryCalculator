// to nie do konca powinien byc plik tylko do dodawania poniewaz w zm w zaleznosci od znakow zmiennych dodawanie moze zmienic sie na odejmowanie
let binaryValueFirst = "15";
let binaryValueSecond = "3";

let convertedArray = convertToNumber(binaryValueFirst, binaryValueSecond);
let resultAddition = addition(convertedArray);
console.log("Wynik dodawania: " + resultAddition);
let resultBinary = convertToBinarySystem(resultAddition);
let arrConvertBinary = convertToBinarySystemTab(convertedArray);
let binaryData = checkBinaryLength(arrConvertBinary);
let resultReady = prepareResult(resultBinary);

function convertToNumber(binaryValueFirst, binaryValueSecond) {
  let arr = [binaryValueFirst, binaryValueSecond];
  for (let i = 0; i < 2; i++) {
    arr[i] = Number(arr[i]);
  }
  return arr;
}

function addition(tabConvertToNumber) {
  let resultAddition = 0;
  for (let i = 0; i < tabConvertToNumber.length; i++) {
    resultAddition += tabConvertToNumber[i];
  }
  return resultAddition;
}

function convertToBinarySystem(resultAddition) {
  let convertToPositiveNumber = Math.abs(resultAddition.toString(2));
  return convertToPositiveNumber;
}

function convertToBinarySystemTab(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString(2);
  }
  console.log(arr);
  return convertedArray;
}

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

function checkSign(resultAddition) {
  let result = 0;
  if (resultAddition > 0) {
    result = "0.";
  } else {
    result = "1.";
  }
  return result;
}

function prepareResult(resultBinary) {
  let result;
  let setSign = checkSign(resultAddition);
  result = setSign + resultBinary;
  return result;
}

function displayResult(resultReady) {
  return resultReady;
}
console.log(displayResult(resultReady));
