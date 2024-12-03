//Task 21
function getSubSets(array, length) {
    let result = [];
  
    function generateSubSets(current, start) {
      //base case
      if (current.length === length) {
        result.push([...current]);
        return;
      }
  
      for (let i = start; i < array.length; i++) {
        current.push(array[i]);
        generateSubSets(current, i + 1);
        current.pop();
      }
    }
  
    generateSubSets([], 0);
    return result;
}
console.log(getSubSets([1, 2, 3], 2));