//Task 6
function fibonacci(n) {
    if (n === 1) {
        return [0];
    }
    else if (n === 2) {
        return [0,1];
    }
    else {
        let arr = fibonacci(n-1);
        arr.push(arr[arr.length-1] + arr[arr.length - 2]);
        return arr.slice(0, n);
    }
}
console.log(fibonacci(10));
console.log(fibonacci(1));
console.log(fibonacci(2));