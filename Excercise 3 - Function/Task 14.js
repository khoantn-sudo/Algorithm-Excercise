//Task 14
function amountToCoins(amount, coins) {
    let result = [];
    coins.sort((a, b) => b - a);
  
    for (let coin of coins) {
      while (amount >= coin) {
        result.push(coin);
        amount -= coin;
      }
    }
    return result;
}
console.log(amountToCoins(23, [25, 10, 5, 2, 1]));