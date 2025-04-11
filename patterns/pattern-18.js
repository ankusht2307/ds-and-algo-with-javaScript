/**
 * Problem Statement: Create a similar pattern
 *
 *      **********
 *      ****  ****
 *      ***    ***
 *      **      **
 *      *        *
 *      *        *
 *      **      **
 *      ***    ***
 *      ****  ****
 *      **********
 *
 */

const printUpperPattern = (n) => {
  for (let row = n; row > 0; row--) {
    let string = "";
    // star
    for (let i = row; i > 0; i--) {
      string += "*";
    }

    // space
    for (let j = 0; j < 2 * n - 2 * row; j++) {
      string += " ";
    }

    // star
    for (let k = row; k > 0; k--) {
      string += "*";
    }

    console.log(string, "\n");
  }
};

const printLowerPattern = (n) => {
  for (let row = 1; row <= n; row++) {
    let string = "";
    // star
    for (let i = 1; i <= row; i++) {
      string += "*";
    }

    // space
    for (let j = 1; j <= 2 * n - 2 * row; j++) {
      string += " ";
    }

    // star
    for (let k = 1; k <= row; k++) {
      string += "*";
    }

    console.log(string, "\n");
  }
};

const createPattern = (n) => {
  printUpperPattern(n);
  printLowerPattern(n);
};

createPattern(5);
