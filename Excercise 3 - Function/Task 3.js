// Task 3
function subString(str) {
    let result = [];
  
    function combinationSearch(start, newStr) {
      if (newStr.length > 0) {
        result.push(newStr);
      }
      //using Recursion
      for (let i = start; i < str.length; i++) {
        combinationSearch(i + 1, newStr + str[i]);
      }
    }
    combinationSearch(0, "");
  
    return result;
}
  
let str = "mom";
console.log(subString(str));
  