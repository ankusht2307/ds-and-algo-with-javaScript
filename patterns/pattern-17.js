/**
 * Problem Statement: Create a similar pattern
 *
 *      E
 *      D E
 *      C D E
 *      B C D E
 *      A B C D E
 *
 */


const createPattern = (nRows) => {
  for (let row = 1; row <= nRows; row++) {
    if (nRows === row) break;
    let char = nRows - row;
    let string = "";
    for (let col = 1; col <= row; col++) {
      string += `${String.fromCharCode(64 + char)}`;
      char++;
    }

    console.log(string, "\n");
  }
};

createPattern(8);
