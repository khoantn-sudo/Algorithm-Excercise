//Task 7
function countVowel(string) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
  
    for (let letter of string.toLowerCase()) {
      if (vowels.includes(letter)) {
        count++;
      }
    }
    return count;
}
console.log(countVowel("my name is khoaaaaaaa"));