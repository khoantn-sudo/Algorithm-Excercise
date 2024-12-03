//Task 12
function binarySearch(array, target) {
    function searchHelper(left, right) {
      if (left > right) return -1;
      
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) return mid;
      if (array[mid] > target) return searchHelper(left, mid - 1);
      return searchHelper(mid + 1, right);
    }
  
    return searchHelper(0, array.length - 1);
}
  
console.log(binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6)); 
console.log(binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 16)); 
  