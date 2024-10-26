function isPalindrome(word) {
  // Write your algorithm here
   // Initialize pointers
   let left = 0; // Start pointer
   let right = word.length - 1; // End pointer
 
   // Loop until the pointers meet in the middle
   while (left <= right) {
     // Check if characters at the current pointers are equal
     if (word[left] !== word[right]) {
       return false; // Not a palindrome
     }
     // Move pointers towards the center
     left++;
     right--;
   }
 
   return true; // It is a palindrome
 }
 


/* 
  Add your pseudocode here
*/


if (require.main === module) {
  // Add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // Additional test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abcba"));
}

module.exports = isPalindrome;
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
