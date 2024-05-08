import { validateNegativeNumbers } from "./variableValidation.js";
let binaryValueFirst = "1";
let binaryValueSecond = "5";
let validateNumbers;

try {
  validateNumbers = validateNegativeNumbers(
    binaryValueFirst,
    binaryValueSecond
  );
  let convertedArray = convertToNumber(validateNumbers);
  let resultMultiplication = multiplication(convertedArray);

  function convertToNumber(validateNumbers) {
    for (let i = 0; i < validateNumbers.length; i++) {
      validateNumbers[i] = Number(validateNumbers[i]);
    }
    return validateNumbers;
  }

  function multiplication(convertedArray) {
    let result = 1;
    for (let i = 0; i < convertedArray.length; i++) {
      result *= convertedArray[i];
    }
    return result;
  }

  function convertToBinarySystem(resultMultiplication) {
    return resultMultiplication.toString(2);
  }

  convertToBinarySystem(resultMultiplication);

  console.log(convertToBinarySystem(resultMultiplication));
} catch (error) {
  //console.error(error);
}

// pozwolic uzytkownikowi na wprowadzenie wiecej niz dwoch wartosci
// mnozenie ulamkow
