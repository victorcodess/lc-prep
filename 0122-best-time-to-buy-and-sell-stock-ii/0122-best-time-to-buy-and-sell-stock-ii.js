/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices, i = 0, bought = null, memo = new Map()) { // Time: O(n * b), Space: O(n * b)
//     if (i >= prices.length) return 0;

//     const key = i + "," + bought;
//     if (memo.has(key)) return memo.get(key);

//     let maxP = 0;

//     if (bought !== null) {
//         const profit = prices[i] - bought;
//         const sell = profit + maxProfit(prices, i + 1, null, memo);
//         const skip = maxProfit(prices, i + 1, bought, memo);

//         maxP = Math.max(sell, skip); 
//     } else {
//         const buy = maxProfit(prices, i + 1, prices[i], memo);
//         const skip = maxProfit(prices, i + 1, bought, memo);

//         maxP = Math.max(buy, skip);
//     }

//     memo.set(key, maxP);
//     return maxP;
// };

var maxProfit = function(prices) { // Time: O(n), Space: O(1)
    let maxP = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) maxP += prices[i + 1] - prices[i];
    }

    return maxP;
};