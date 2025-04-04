/**
 * Problem Statement:
 * create a similar pattern
 *
 *      1
 *      2 2
 *      3 3 3
 *      4 4 4 4
 *      5 5 5 5 5
 *
 */

const createPattern = () => {
  for (let i = 1; i <= 5; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string += `${i} `;
    }
    console.log(string, "\n");
  }
};

createPattern();
