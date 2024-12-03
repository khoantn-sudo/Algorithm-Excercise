//Task 7
function checkEven(x) {
    //Instead of modulo, check if x - 2 === 0
    if (x < 0) {
        return false;
    }

    if (x === 0) {
        return true; 
    }
    else {
        x = x - 2;
        return checkEven(x);
    }
}
console.log(checkEven(11));
console.log(checkEven(20));