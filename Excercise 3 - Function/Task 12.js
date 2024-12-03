//Task 12
function isPerfectNumber(number) {
    let sum = 1;
    //base case
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i === 0) {
        sum += i;
        if (i !== number / i) {
          sum += number / i;
        }
      }
    }
  
    return number === sum;
}
console.log(isPerfectNumber(6));