export function validateNegativeNumbers(binaryValueFirst, binaryValueSecond) {
  if (binaryValueFirst <= 0 || binaryValueSecond <= 0) {
    throw new Error("Jedna z wartości jest ujemna.");
  }

  let arr = [binaryValueFirst, binaryValueSecond];
  return arr;
}
