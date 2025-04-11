/**
 * Problem Statement: Create a similar pattern
 *
 *      * * * * * * * * *
 *        * * * * * * *
 *          * * * * *
 *            * * *
 *              *
 *
 */

const createPattern = (n) => {
  for (let i = n; i > 0; i--) {
    let string = "";
    // space
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }

    // start
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }

    // space
    for (let l = 0; l < n - i; l++) {
      string += " ";
    }
    console.log(string, "\n");
  }
};

createPattern(5);
