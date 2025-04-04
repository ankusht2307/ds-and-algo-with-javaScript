/**
 * Problem Statement:
 * create a similar pattern
 *
 *      1 2 3 4 5
 *      1 2 3 4
 *      1 2 3
 *      1 2
 *      1
 *
 */

const createPattern = () => {
  for (let i = 5; i >= 1; i--) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string += `${j} `;
    }

    console.log(string, "\n");
  }
};

createPattern();
