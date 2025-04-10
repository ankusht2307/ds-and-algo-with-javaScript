const fibonacci = (n) => {
    if (!n) return 'Please add a valid number.';
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    };
    return fib;
}

console.log(fibonacci());
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

// Big O - O(n) - Linear time complexicity