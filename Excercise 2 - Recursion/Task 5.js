//Task 5
function exponential(x, y) {
    if (y === 0 ) {
        return 1;
    }
    else {
        return x * exponential(x, y - 1)
    }
}
console.log(exponential(2,5));