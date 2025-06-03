const sumOfDigit = (digit) => {
  if (Math.floor(digit / 10) === 0) return digit;

  return (digit % 10) + sumOfDigit(Math.floor(digit / 10));
};

const digit = 202;
const sum = sumOfDigit(digit);
console.log(sum);
