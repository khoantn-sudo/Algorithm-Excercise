//Task 16
function uniqueChar(string) {
    let unique = "";
    let seen = {};
  
    for (let i = 0; i < string.length; i++) {
      if (!seen[string[i]]) {
        unique += string[i];
        seen[string[i]] = true;
      }
    }
    return unique;
}
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));