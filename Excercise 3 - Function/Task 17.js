//Task 17
function countLetterOccurrences(string) {
    const letterCount = {};
  
    for (let character of string) {
      if ((character >= "a" && character <= "z") || (character >= "A" && character <= "Z")) {
        character = character.toLowerCase();
        letterCount[character] = (letterCount[character] || 0) + 1;
      }
    }
  
    return letterCount;
}
console.log(countLetterOccurrences("khoa nguyen"));