//Task 10
function isPalindrome(string) {
    // Remove non-alphabet & convert to lowercase
    string = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
    
    function helper(left, right) {
      if (left >= right) return true;
      if (string[left] !== string[right]) return false;
      return helper(left + 1, right - 1);
    }
    
    return helper(0, string.length - 1);
}
  
console.log(isPalindrome("madam")); 
console.log(isPalindrome("abdb"));  
console.log(isPalindrome("ab"));    
console.log(isPalindrome("a"));     
  