const productOfDigits = (num) => {
  if (Math.floor(num / 10) === 0) return num;
  return (num % 10) * productOfDigits(Math.floor(num / 10));
};

const digit = 1;
console.log(productOfDigits(digit));
