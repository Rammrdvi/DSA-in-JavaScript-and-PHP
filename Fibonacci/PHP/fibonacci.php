<?php
function generateFibonacci($n) {
    $fibonacci = [0, 1];

    for ($i = 2; $i < $n; $i++) {
        $fibonacci[] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
    }

    return array_slice($fibonacci, 0, $n);
}

// Example usage:
$n = 10;
$fibonacciSequence = generateFibonacci($n);
echo "Fibonacci sequence up to $n terms: " . implode(', ', $fibonacciSequence);

?>
