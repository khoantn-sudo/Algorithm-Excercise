//Task 1
function reverseNumber(num) {
  let result = 0;
  while (num > 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}
const num = 12345;
console.log(reverseNumber(num));