function sortedArray(arr) {
    return arr.sort((a, b) => a - b); // ascending sort
}
  
const arr = [4, 3, 5, 6, 7, -1, -2, -3];
console.log(sortedArray(arr));