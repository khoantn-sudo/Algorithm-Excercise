//Task 20
function generateID(number) {
    let text = "";
    let sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < number; i++) {
      text += sample.charAt(Math.random() * sample.length);
    }
    return text;
}
console.log(generateID(8));