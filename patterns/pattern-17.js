/**
 * Problem Statement: Create a similar pattern
 *
 *      E
 *      D E
 *      C D E
 *      B C D E
 *      A B C D E
 *
 */


const createPattern = (n) => {
  for (let row = 1; row <= n; row++) {
    if (n === row) break;
    let char = n - row;
    let string = "";
    for (let col = 1; col <= row; col++) {
      string += `${String.fromCharCode(64 + char)}`;
      char++;
    }

    console.log(string, "\n");
  }
};

createPattern(8);
