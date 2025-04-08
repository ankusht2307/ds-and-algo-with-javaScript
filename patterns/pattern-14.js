/**
 * Problem Statement:
 * create a similar pattern
 *
 *      A B C D E
 *      A B C D
 *      A B C
 *      A B
 *      A
 *
 *
 */

const createPattern = (nRows) => {
  for (let row = nRows; row >= 1; row--) {
    let string = "";
    for (let col = 1; col <= row; col++) {
      string += `${String.fromCharCode(col + 64)} `;
    }

    console.log(string, "\n");
  }
};

createPattern(5);
