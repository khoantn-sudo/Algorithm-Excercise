//Task 4
function swapCase(string) {
    let result = '';
  
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
  
      if (char === char.toLowerCase()) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
    }
    return result;
}
  
let string = 'My Name Is Khoa';
console.log(swapCase(string));