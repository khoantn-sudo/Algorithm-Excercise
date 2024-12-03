//Task 3
function range(x, y) {
    //Check base case
    if ((y - x) === 2) {
        return [x + 1];
    }

    else 
    {
        let result = range(x, y - 1);
        result.push(y -1);
        return result;
    }
}

console.log(range(1,5));