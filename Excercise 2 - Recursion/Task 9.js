//Task 9
function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
}
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    // Merge two sorted arrays
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return result.concat(left.slice(i), right.slice(j));
}
  
const sampleArray = [34, 7, 23, 32, 5, 62];
console.log(mergeSort(sampleArray));  
  