<?php
function isPalindrome($str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    $cleanedStr = strtolower(preg_replace("/[^A-Za-z0-9]/", '', $str));
    
    // Reverse the cleaned string
    $reversedStr = strrev($cleanedStr);
    
    // Check if the cleaned string is equal to its reverse
    return $cleanedStr === $reversedStr;
}

// Example usage:
$input = "A man, a plan, a canal, Panama";
if (isPalindrome($input)) {
    echo "'$input' is a palindrome.";
} else {
    echo "'$input' is not a palindrome.";
}

?>
