export function validateNegativeNumbers(binaryValueFirst, binaryValueSecond) {
  /*try {
    if (!(binaryValueFirst <= 0 || binaryValueSecond <= 0)) {
      let arr = [binaryValueFirst, binaryValueSecond];
      return arr;
    }
  } catch (error) {
    console.error(error);
  }*/

  if (binaryValueFirst <= 0 || binaryValueSecond <= 0) {
    throw new Error("Jedna z wartości jest ujemna.");
  }

  let arr = [binaryValueFirst, binaryValueSecond];
  return arr;
}
