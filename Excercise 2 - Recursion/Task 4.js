//Task 4
function sumArr(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    
    else {
        return arr.shift() + sumArr(arr);
    }
}
console.log(sumArr([1,2,3,4]));