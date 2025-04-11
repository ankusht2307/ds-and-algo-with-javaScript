/**
 * Problem Statement: Create a similar pattern
 *
 *      *
 *      * *
 *      * * *
 *      * * * *
 *      * * * * *
 *      * * * *
 *      * * *
 *      * *
 *      *
 *
 */

const createPattern = (n) => {
  for (let i = 0; i <= n; i++) {
    let count = i;
    let string = "";
    if (count > Math.floor(n / 2)) count = n - i + 1;

    for (let j = 0; j < count; j++) {
      string += "* ";
    }

    console.log(string, "\n");
  }
};

createPattern(9);
