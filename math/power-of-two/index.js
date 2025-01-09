const isPowerOfTwo = (n) => {
  if (n === 0) return true;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
};

// Big-O: O(logn)

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(7));
console.log(isPowerOfTwo(8));

const isPowerOfTwoOptimzed = (n) => {
  if (n === 0) return true;

  // in bitwise comparision the power of two
  // always ends up with two except for zero;
  return (n & (n - 1)) === 0;
};

console.log('=================');
console.log(isPowerOfTwoOptimzed(0));
console.log(isPowerOfTwoOptimzed(1));
console.log(isPowerOfTwoOptimzed(2));
console.log(isPowerOfTwoOptimzed(3));
console.log(isPowerOfTwoOptimzed(4));
console.log(isPowerOfTwoOptimzed(5));
console.log(isPowerOfTwoOptimzed(6));
console.log(isPowerOfTwoOptimzed(7));
console.log(isPowerOfTwoOptimzed(8));
