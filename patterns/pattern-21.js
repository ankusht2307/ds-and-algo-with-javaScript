/**
 * Problem Statement: Create a similar pattern
 *
 *      4 4 4 4 4 4 4
 *      4 3 3 3 3 3 4
 *      4 3 2 2 2 3 4
 *      4 3 2 1 2 3 4
 *      4 3 2 2 2 3 4
 *      4 3 3 3 3 3 4
 *      4 4 4 4 4 4 4
 *
 */

const createPattern = (n) => {
  for (let row = 0; row < 2 * n - 1; row++) {
    let string = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      let top = row;
      let left = col;
      let right = 2 * n - 2 - col;
      let bottom = 2 * n - 2 - row;
      string += n - Math.min(Math.min(top, bottom), Math.min(left, right));
    }

    console.log(string, "\n");
  }
};

createPattern(5);
