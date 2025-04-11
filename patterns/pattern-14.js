/**
 * Problem Statement: Create a similar pattern
 *
 *      A B C D E
 *      A B C D
 *      A B C
 *      A B
 *      A
 *
 *
 */

const createPattern = (n) => {
  for (let row = n; row >= 1; row--) {
    let string = "";
    for (let col = 1; col <= row; col++) {
      string += `${String.fromCharCode(col + 64)} `;
    }

    console.log(string, "\n");
  }
};

createPattern(5);
