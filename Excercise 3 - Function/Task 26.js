//Task 26
function longestSubstringWithoutRepeatingCharacters(input) {
  const chars = input.split("");
  let subString = "";
  let longestString = "";
  const hash = {}; // hash map to store the index of characters
  let start = 0; // left pointer of the sliding window

  for (let i = 0; i < chars.length; i++) {
    const currChar = chars[i]; // current character

    // check repeated in the substring
    if (hash[currChar] >= start) {
      start = hash[currChar] + 1;
    }

    subString = input.substring(start, i + 1);

    hash[currChar] = i; //update hashmap with new character's index

    // update the longest substring if the current one is longer
    if (subString.length > longestString.length) {
      longestString = subString;
    }
  }

  return longestString;
}

console.log(longestSubstringWithoutRepeatingCharacters("google.com"));
console.log(longestSubstringWithoutRepeatingCharacters("example.com"));