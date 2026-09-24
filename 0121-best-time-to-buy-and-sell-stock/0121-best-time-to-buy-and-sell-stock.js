/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) { // Time: O(n), Space: O(n)
//     let maxP = 0;
//     const memo = new Map();

//     function dfs (i, bought) {
//         if (i >= prices.length) return 0;
//         if (prices[i] <= bought) return 0;

//         const key = `${i},${bought}`;
//         if (memo.has(key)) return memo.get(key);

//         if (bought !== -Infinity) {
//             const sell = prices[i] - bought;
//             const skip = dfs(i + 1, bought);

//             memo.set(key, Math.max(sell, skip));
//             return memo.get(key);
//         } else {
//             const buy = dfs(i + 1, prices[i]);
//             const skip = dfs(i + 1, bought);

//             memo.set(key, Math.max(buy, skip));
//             return memo.get(key);
//         }
//     }

//     for (let i = 0; i < prices.length; i++) {
//         const currP = dfs(i, -Infinity);
//         maxP = Math.max(currP, maxP);
//     }


//     return maxP;
// };

var maxProfit = function(prices) { // Time: O(n), Space: O(1)
    let maxProfit = 0;
    let minP = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > minP) {
            maxProfit = Math.max(maxProfit, prices[i] - minP)
        }

        minP = Math.min(minP, prices[i]);
    }


    return maxProfit;
};