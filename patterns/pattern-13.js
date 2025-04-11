/**
 * Problem Statement: Create a similar pattern
 *
 *      A
 *      A B
 *      A B C
 *      A B C D
 *      A B C D E
 *
 */

const createPattern = (n) => {
  for (let row = 1; row <= n; row++) {
    let string = "";
    for (let col = 1; col <= row; col++) {
      string += `${String.fromCharCode(col + 64)} `;
    }

    console.log(string, "\n");
  }
};

createPattern(5);
