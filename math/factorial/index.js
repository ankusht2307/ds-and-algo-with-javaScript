const factorial = (num) => {
  if (num === 0) return 1;

  if (!num) return "Please enter a valid number";

  let factorial = 1;

  for (i = 1; i <= num; i++) {
    factorial *= i ;
  }

  return factorial;
};

console.log(factorial(5));
