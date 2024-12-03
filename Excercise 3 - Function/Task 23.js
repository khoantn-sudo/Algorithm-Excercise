//Task 23
function firstNonRepeatedCharacter(string) {
  let charCount = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (charCount[string[i]] === 1) {
      return string[i]; 
    }
  }

  return null;
}
console.log(firstNonRepeatedCharacter("abacddbec"));