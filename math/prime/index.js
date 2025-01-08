const isPrime = (num) => {
  if (num < 2) return false;

  // kept i < num beacuse if the number
  // is divisble by itself, it's a prime
  // number.
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(5));

function isPrimeOptimized(num) {
  if (num < 2) return false;


  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log("==========optimized");
console.log(isPrimeOptimized(1));
console.log(isPrimeOptimized(2));
console.log(isPrimeOptimized(3));
console.log(isPrimeOptimized(4));
console.log(isPrimeOptimized(7));
console.log(isPrimeOptimized(5));
