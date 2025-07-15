const bruteReverse = (digit) => {
  const digitString = String(digit);
  let str = "";
  for (let i = digitString.length - 1; i >= 0; i--) {
    str += digitString[i];
  }
  return str;
};

const digit = 1234;
const reversedDigit = bruteReverse(digit);
// console.log(reversedDigit);

// Big O: O(n)

const revDigit = (digit, reversedDigit = 0) => {
  if (digit === 0) return reversedDigit;

  return revDigit(Math.floor(digit / 10), reversedDigit * 10 + (digit % 10));
};

console.log(revDigit(1234));
