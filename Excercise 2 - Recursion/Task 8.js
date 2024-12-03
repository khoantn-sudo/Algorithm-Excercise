//Task 8

function binarySearchRecursive(arr, target, start = 0, end = arr.length) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    } 
    // target < middle  ==> search the left half
    else if (target < arr[mid]) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    } 
    // target > middle  ==> search the right half
    else {
        return binarySearchRecursive(arr, target, mid + 1, end);
    }
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetValue = 5;

const resultIndex = binarySearchRecursive(sortedArray, targetValue);

// Output the result
if (resultIndex !== -1) {
  console.log(`The target value ${targetValue} is found at index ${resultIndex}.`);
} else {
  console.log(`The target value ${targetValue} is not present in the array.`);
}
