//Task 11
function findSecond_Lowest_Greatest(array) {
    let newArray = [];
  
    //remove duplicates (if exists)
    for (let i = 0; i < array.length; i++) {
      if (!newArray.includes(array[i])) {
        newArray.push(array[i]);
      }
    }
    //ascending sorting
    newArray.sort((a, b) => a - b);
  
    let secondLowest = newArray[1];
    let secondGreatest = newArray[newArray.length - 2];
  
    return [secondLowest, secondGreatest];
}
console.log(findSecond_Lowest_Greatest([1, 2, 4, 7, 4, 2, 3, 5, 6, 7, 2]));
  