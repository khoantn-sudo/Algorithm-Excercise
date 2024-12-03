//Task 25
function longestCountryName(array) {
  let longestName = array.reduce((longest, current) => {
    return current.trim().length > longest.length ? current.trim() : longest;
  }, "");
  return longestName;
}

console.log(
  longestCountryName(["Australia", "Germany", "United States of America"])
);