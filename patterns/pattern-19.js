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

const createPattern = (n) => {
  let stars = 1;
  for (let row = 1; row <= n; row++) {
    let string = "";
    let space = n - 2 * row + 1;
    if (Math.ceil(n / 2) < row) {
      space = 2 * row - n - 1;
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

    if (Math.ceil(n / 2) <= row) {
      stars -= 1;
    } else {
      stars += 1;
    }

    console.log(string, "\n");
  }
};

createPattern(9);
