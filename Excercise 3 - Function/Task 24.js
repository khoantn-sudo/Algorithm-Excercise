///Task 24
function bubbleSort(array) {
  let temp, swapped;

  for (let i = 0; i < array.length - 1; i++) {
    swapped = false;

    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }

    if (swapped === false) {
      break;
    }
  }
  return array;
}
console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);