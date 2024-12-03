//Task 5
function capitalized(str) {
    let newStr = str.split(" ");
  
    for (let i = 0; i < newStr.length; i++) {
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substring(1);
    }
  
    return newStr.join(" ");
}
console.log(capitalized("my name is khoa"));