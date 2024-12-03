//Task 27
function longestPalindrome(string) {
  if (string.length === 0) return ""; //base case: empty strng

  let longest = "";
  let expandAroundCenter = (left, right) => {
    while (
      left >= 0 &&
      right < string.length &&
      string[left] === string[right]
    ) {
      left--;
      right++;
    }
    return string.substring(left + 1, right);
  };

  // Loop over each character and try to expand around it
  for (let i = 0; i < string.length; i++) {
    // Check for odd-length palindrome (centered at i)
    let oddPalindrome = expandAroundCenter(i, i);
    // Check for even-length palindrome (centered between i and i+1)
    let evenPalindrome = expandAroundCenter(i, i + 1);

    // Update longest palindrome found
    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
}
console.log(longestPalindrome("bananas")); 
console.log(longestPalindrome("abracadabra")); 