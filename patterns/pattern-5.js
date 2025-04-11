/**
 * Problem Statement: Create a similar pattern
 *
 *      * * * * *
 *      * * * *
 *      * * *
 *      * *
 *      *
 *
 */

const createPattern = () => {
  for (let i = 0; i < 5; i++) {
    let string = "";
    for (let j = 5; j > i; j--) {
      string += "* ";
    }
    console.log(string, "\n");
  }
};

createPattern();

// Bonus section
const createPatternWithVariableDimensions = (height = 2, width = 2) => {
  for (let i = 0; i < height; i++) {
    let string = "";
    for (let j = width; j > i; j--) {
      string += "* ";
    }
    console.log(string, "\n");
  }
};

createPatternWithVariableDimensions(7, 7);
