/**
 * Problem Statement:
 * create a similar pattern
 *
 *      *
 *      * *
 *      * * *
 *      * * * *
 *      * * * * *
 *
 */

const createPattern = () => {
  for (let i = 0; i < 5; i++) {
    let string = "";
    for (let j = 0; j <= i; j++) {
      string += "* ";
    }
    console.log(string, "\n");
  }
};

createPattern();
