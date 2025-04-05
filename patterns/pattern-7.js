/**
 * Problem Statement:
 * create a similar pattern
 *
 *              *
 *            * * *
 *          * * * * *
 *        * * * * * * *
 *      * * * * * * * * *
 *
 */

const createPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let string = "";
    // space
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    //star
    for (let k = 0; k < i * 2 + 1; k++) {
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
