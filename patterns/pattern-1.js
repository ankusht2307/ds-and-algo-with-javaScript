/**
 * Problem Statement: Create a similar pattern
 *
 *      * * * * *
 *      * * * * *
 *      * * * * *
 *      * * * * *
 *      * * * * *
 *
 */

const createPattern = () => {
  for (let i = 0; i < 5; i++) {
    let string = "";
    for (let j = 0; j < 5; j++) {
      string += "* ";
    }
    console.log(string, "\n");
  }
};

createPattern();
