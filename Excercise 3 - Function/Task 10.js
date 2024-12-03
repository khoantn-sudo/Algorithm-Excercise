//Task 10
function matrix(number) {
    let result = [];
  
    for (let i = 0; i < number; i++) {
      let row = new Array(number).fill(0); // create new array in side with initial value is 0
      row[i] = 1;
      result.push(row);
    }
    return result;
}
console.log(matrix(5));