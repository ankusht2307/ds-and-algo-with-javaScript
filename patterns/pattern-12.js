/**
 * Problem Statement: Create a similar pattern
 *
 *      1
 *      2 3
 *      4 5 6
 *      7 8 9 10
 *      11 12 13 14 15
 *
 */

const createPattern = (n) => {
  let lastPrintedValue = 0;
  for (let row = 1; row <= n; row++) {
    let string = "";
    for (let col = 1; col <= row; col++) {
      lastPrintedValue += 1;
      string += `${lastPrintedValue} `;
    }
    console.log(string, "\n");
  }
};

createPattern(5);
