/**
 * Problem Statement: Create a similar pattern
 *
 *      ****
 *      *  *
 *      *  *
 *      ****
 *
 */

const createPattern = (n) => {
  for (let row = 0; row < n; row++) {
    let string = "";
    for (let col = 0; col < n; col++) {
      if (row === 0 || row === n - 1 || col === 0 || col === n - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }

    console.log(string, "\n");
  }
};

createPattern(4);
