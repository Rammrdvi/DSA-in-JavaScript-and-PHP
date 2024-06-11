<?php
function generateFibonacci($n) {
    // Initialize the sequence with the first two terms: 0 and 1
    $fibonacci = [0, 1];

    // Loop from 2 to n-1 to generate the rest of the sequence
    for ($i = 2; $i < $n; $i++) {
        // Each new term is the sum of the previous two terms
        $fibonacci[] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
    }

    // Return the sequence up to n terms (in case n < 2)
    return array_slice($fibonacci, 0, $n);
}

// Example usage:
$n = 10; // Define the number of terms to generate
$fibonacciSequence = generateFibonacci($n); // Generate the Fibonacci sequence
echo "Fibonacci sequence up to $n terms: " . implode(', ', $fibonacciSequence); // Print the sequence
?>
