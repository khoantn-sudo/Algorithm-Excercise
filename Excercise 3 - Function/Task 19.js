//Task 19
function biggerElement(array, threshold) {
    let biggerElements = array.filter((element) => element > threshold);
    return biggerElements;
}
console.log(biggerElement([1, 2, 3, 4, 5, 6, 7, 8], 4));