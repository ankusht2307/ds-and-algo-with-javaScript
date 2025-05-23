/**
 * Problem Statement: Create a similar pattern
 *
 *      A
 *      B B
 *      C C C
 *      D D D D
 *      E E E E E
 *
 */

const createPattern = (n) => {
  for (let row = 1; row <= n; row++) {
    let string = "";
    for (let col = 1; col <= row; col++) {
      string += `${String.fromCharCode(64 + row)} `;
    }

    console.log(string, "\n");
  }
};

createPattern(5);
