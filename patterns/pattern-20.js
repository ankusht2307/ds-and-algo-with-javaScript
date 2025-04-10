/**
 * Problem Statement: Create a similar pattern
 *
 *      ****
 *      *  *
 *      *  *
 *      ****
 *
 */

const createPattern = (nRows) => {
  for (let row = 0; row < nRows; row++) {
    let string = "";
    for (let col = 0; col < nRows; col++) {
      if (row === 0 || row === nRows - 1 || col === 0 || col === nRows - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }

    console.log(string, "\n");
  }
};

createPattern(4);
