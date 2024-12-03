//Task 8
function primeCheck(num) {
    //base case
    if (num <= 1) {
      return false;
    }

    if (num === 2) {
      return true;
    } 
    else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;s
        } else {
          return true;
        }
      }
    }
}
console.log(primeCheck(5));