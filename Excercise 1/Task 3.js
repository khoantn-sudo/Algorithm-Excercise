//Task 3
function interpolSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high && x >= arr[low] && x <= arr[high]) {
        // base case -- element at low index
        if (arr[low] === x) {
            return low;
        }
        
        // Interpolation position calculation
        let position = low + Math.floor((x - arr[low]) * (high - low) / (arr[high] - arr[low]));
        
        if (arr[position] === x) {
            return position;
        }
        
        if (arr[position] < x) {
            low = position + 1;
        } 
        else {
            high = position - 1;
        }
    }
    return -1;
}

console.log(interpolSearch([1, 7, 13, 14, 15, 26, 37, 48, 99, 110], 13));
console.log(interpolSearch([1, 7, 13, 14, 15, 26, 37, 48, 99, 110], 26)); 
console.log(interpolSearch([1, 7, 13, 14, 15, 26, 37, 48, 99, 110], 0));  
console.log(interpolSearch([1, 7, 13, 14, 15, 26, 37, 48, 99, 110], 99)); 
