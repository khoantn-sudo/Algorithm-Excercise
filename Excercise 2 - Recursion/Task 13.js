//Task 13
function letterCombinations(digits) {
    //Sample Data
    const digitMap = {
      '1': 'abc',
      '2': 'def',
      '3': 'ghi',
      '4': 'jkl',
      '5': 'mno',
      '6': 'pqr',
      '7': 'stu',
      '8': 'vwx',
      '9': 'yz',
    };
  
    const result = [];
  
    // Base case: digit empty --> empty array
    if (!digits) return result;
  
    //backtracking function
    function backtrack(index, currentCombination) {
      // Base case: If we've formed a combination of the same length as digits, add it to result
      if (index === digits.length) {
        result.push(currentCombination);
        return;
      }
  
      const currentDigit = digits[index];
      
      // current digit is valid ? --> If yes map to letter
      const letters = digitMap[currentDigit];
      
      // If letters is undefined, the digit is invalid (e.g., '0')
      if (!letters) {
        return; //invalid digit --> do nothing
      }
  
      for (const letter of letters) {
        // Recurse with the next index
        backtrack(index + 1, currentCombination + letter);
      }
    }
  
    backtrack(0, '');
  
    return result;
}
  
console.log(letterCombinations("12"));  
console.log(letterCombinations("9"));   
console.log(letterCombinations("1")); 
console.log(letterCombinations("23"));  
  