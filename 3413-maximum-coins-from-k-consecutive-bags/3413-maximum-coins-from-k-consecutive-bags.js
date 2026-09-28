/**
 * @param {number[][]} coins
 * @param {number} k
 * @return {number}
 */
// var maximumCoins = function(coins, k) {
//     let min = Infinity;
//     let max = -Infinity;
    
//     const map = new Map();

//     for (let [a, b, c] of coins) {
//         min = Math.min(min, a, b);
//         max = Math.max(max, a, b);
//     }

//     const arr = [];

//     for (let i = min; i <= max; i++) {
//         map.set(i, 0);
//     }

//     for (let [a, b, c] of coins) {
//         for (let j = a; j <= b; j++) {
//             map.set(j, c);
//         }
//     }

//     for (let [num, coin] of map) {
//         arr.push([num, coin]);
//     }

//     arr.sort((a, b) => a[0] - b[0]);
 
//     let l = 0;
//     let r = 0;
//     let sum = 0;
//     let maxC = -Infinity;

//     while (r < arr.length) { 
//         sum += arr[r][1];

//         if (r >= k) {
//             sum -= arr[l][1];
//             l++;
//         }

//         maxC = Math.max(maxC, sum);

//         r++;
//     }

//     return maxC;
// };

var maximumCoins = function(coins, k) { // Time: O(nlog(n)), Space: O(n)
    coins.sort((a, b) => a[0] - b[0]);

    const n = coins.length;
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const [l, r, c] = coins[i];
        const sum = (r - l + 1) * c;
        prefix[i + 1] = prefix[i] + sum;
    }

    function getCoins(x) {
        let left = 0;
        let right = n - 1;

        while (left < right) {
            const mid = Math.floor((left + right + 1) / 2);

            if (coins[mid][0] <= x) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }

        let i = right;

        if (i < 0) return 0;

        const [l, r, c] = coins[i];
        let contained = Math.max(0, Math.min(x, r) - l + 1);

        return prefix[i] + contained * c;
    }

    let maxSum = 0;

    for (let [l, r, c] of coins) {
        const starts = [l, r - k + 1];

        for (let start of starts) {
            const end = start + k - 1;

            const total = getCoins(end) - getCoins(start - 1);
            maxSum = Math.max(maxSum, total);
        }
    }

    return maxSum;
};