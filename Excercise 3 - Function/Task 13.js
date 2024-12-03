//Task 13
function factors(number) {
    let numFactor = [];
  
    for (let i = 1; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        numFactor.push(i);
        if (number / i !== i) {
          numFactor.push(number / i);
        }
      }
    }
  
    return numFactor.sort((a, b) => a - b);
}
console.log(factors(24));