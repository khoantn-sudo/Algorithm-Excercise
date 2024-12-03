//Task 2
function isPalindrome(str) {
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    //Check left & right
    let left = 0;
    let right = newStr.length - 1;
  
    while (left < right) {
      if (newStr[left] !== newStr[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
}
let string = "abcddcb" // False
// let string = "A man, a plan, a canal: Panama"; --> True
console.log(isPalindrome(string));