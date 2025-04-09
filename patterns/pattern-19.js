/**
 * Problem Statement: Create a similar pattern
 *
 *      *        *
 *      **      **
 *      ***    ***
 *      ****  ****
 *      **********
 *      ****  ****
 *      ***    ***
 *      **      **
 *      *        *
 *
 */

const createPattern = (nRows) => {
  let stars = 1;
  for (let row = 1; row <= nRows; row++) {
    let string = "";
    let space = nRows - 2 * row + 1;
    if (Math.ceil(nRows / 2) < row) {
      space = 2 * row - nRows - 1;
    }

    // star
    for (let i = 1; i <= stars; i++) {
      string += "*";
    }

    // space
    for (let j = 1; j <= space; j++) {
      string += " ";
    }

    // star
    for (let k = 1; k <= stars; k++) {
      string += "*";
    }

    if (Math.ceil(nRows / 2) <= row) {
      stars -= 1;
    } else {
      stars += 1;
    }

    console.log(string, "\n");
  }
};

createPattern(9);
