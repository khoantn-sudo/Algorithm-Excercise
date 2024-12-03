//Task 4
function sortString(str) {
    let newStr = str.split("").sort().join("");
    return newStr;
}
let str = "asdasdasduwejasfwer";
console.log(sortString(str));