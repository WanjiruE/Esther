// Function to check if a number is even
function isEven(num) {
    // Check if num is divisible by 2 (even)
    if (num % 2 === 0) {
        return true; // Return true if even
    } else {
        return false; // Return false if odd
    }
}

// Test cases
console.log(isEven(4)); // Expected output: true
console.log(isEven(7)); // Expected output: false
console.log(isEven(-2)); // Expected output: true
