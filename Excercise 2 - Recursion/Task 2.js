//Task 2
function gcd(x ,y) {
    if (x === 0) {
        return y;
    }
    return gcd(y % x, x);
}

console.log(gcd(36, 108));