/**
 * Problem Statement:
 * create a similar pattern
 *
 *      1      1
 *      12    21
 *      123  321
 *      12344321
 *
 */

const createPattern = (nRows) => {
  for (let rows = 1; rows <= nRows; rows++) {
    let string = "";
    for (let j = 1; j <= rows; j++) {
      string += `${j} `;
    }
    for (let k = 1; k <= 2 * nRows - 2 * rows; k++) {
      string += "  ";
    }
    for (let l = rows; l >= 1; l--) {
      string += `${l} `;
    }

    console.log(string, "\n");
  }
};

createPattern(4);
