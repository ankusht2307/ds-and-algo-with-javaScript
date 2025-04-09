/**
 * Problem Statement: Create a similar pattern
 *
 *      **********
 *      ****  ****
 *      ***    ***
 *      **      **
 *      *        *
 *      *        *
 *      **      **
 *      ***    ***
 *      ****  ****
 *      **********
 *
 */

const printUpperPattern = (nRows) => {
  for (let row = nRows; row > 0; row--) {
    let string = "";
    // star
    for (let i = row; i > 0; i--) {
      string += "*";
    }

    // space
    for (let j = 0; j < 2 * nRows - 2 * row; j++) {
      string += " ";
    }

    // star
    for (let k = row; k > 0; k--) {
      string += "*";
    }

    console.log(string, "\n");
  }
};

const printLowerPattern = (nRows) => {
  for (let row = 1; row <= nRows; row++) {
    let string = "";
    // star
    for (let i = 1; i <= row; i++) {
      string += "*";
    }

    // space
    for (let j = 1; j <= 2 * nRows - 2 * row; j++) {
      string += " ";
    }

    // star
    for (let k = 1; k <= row; k++) {
      string += "*";
    }

    console.log(string, "\n");
  }
};

const createPattern = (nRows) => {
  printUpperPattern(nRows);
  printLowerPattern(nRows);
};

createPattern(5);
