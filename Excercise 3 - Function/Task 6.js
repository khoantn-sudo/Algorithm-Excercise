//Task 6
function findLongest(string) {
    let newString = string.split(" ");
    let longestWord;
    let count = 0;
  
    for (let i = 0; i < newString.length; i++) {
      if (newString[i].length > count) {
        count = newString[i].length;
        longestWord = newString[i];
      }
    }
    return longestWord;
}
console.log(findLongest("The quick brown fox jumps"));