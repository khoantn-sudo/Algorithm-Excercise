//Task 11
function binaryToDecimal(binaryString) {
    if (binaryString.length === 0) return 0;
    return parseInt(binaryString[0], 10) * Math.pow(2, binaryString.length - 1) + binaryToDecimal(binaryString.slice(1));
}
  
console.log(binaryToDecimal("1101"));  
  