/**
 * Problem Statement:
 * create a similar pattern
 *
 *      1
 *      0 1
 *      1 0 1
 *      0 1 0 1
 *      1 0 1 0 1
 *
 */

const createPattern = (n) => {
  for (let i = 1; i < n; i++) {
    let string = "";
    for (let j = 1; j < i; j++) {
      if (i % 2 === 0) {
        string += `${+(j % 2 === 1)} `
      } else {
        string += `${+!(j % 2 === 1)} `
      }
    }
    console.log(string, "\n");
  }
};

createPattern(7);
