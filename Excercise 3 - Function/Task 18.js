//Task 18
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      //base case
      if (array[mid] === target) {
        return mid;
      }
  
      if (array[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));