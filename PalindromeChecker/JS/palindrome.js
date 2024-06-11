function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === reversedStr;
}

// Example usage:
const input = "A man, a plan, a canal, Panama";
if (isPalindrome(input)) {
    console.log(`'${input}' is a palindrome.`);
} else {
    console.log(`'${input}' is not a palindrome.`);
}



// Another Method

var isPalindrome = function (x) {
    
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
  };
  
  const res = isPalindrome(929);
  console.log(res);