/**
 * Problem Statement: Create a similar pattern
 *
 *              A
 *            A B A
 *          A B C B A
 *        A B C D C B A
 *
 */

const createPattern = (nRows) => {
  for (let row = 1; row <= nRows; row++) {
    let string = "";

    // spaces
    for (let i = nRows - row; i > 0; i--) {
      string += "  ";
    }

    // chars
    let middle = row;
    for (let j = 1; j <= 2 * row - 1; j++) {
      if (j > middle) {
        middle -= 1;
        string += `${String.fromCharCode(64 + middle)} `;
        continue;
      }
      string += `${String.fromCharCode(64 + j)} `;
    }

    // spaces
    for (let j = nRows - row; j > 0; j--) {
      string += " ";
    }

    console.log(string, "\n");
  }
};

createPattern(8);
