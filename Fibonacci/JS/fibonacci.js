function generateFibonacci(n) {
    // Initialize the sequence with the first two terms: 0 and 1
    const fibonacci = [0, 1];

    // Loop from 2 to n-1 to generate the rest of the sequence
    for (let i = 2; i < n; i++) {
        // Each new term is the sum of the previous two terms
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    // Return the sequence up to n terms (in case n < 2)
    return fibonacci.slice(0, n);
}

// Example usage:
const n = 10; // Define the number of terms to generate
const fibonacciSequence = generateFibonacci(n); // Generate the Fibonacci sequence
console.log(`Fibonacci sequence up to ${n} terms: ${fibonacciSequence.join(', ')}`); // Print the sequence
