/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n, l = 0, r = 0, memo = new Map()) { // Time: O(n * n), Space: O(n * n)
    if (r > l) return [];
    if (l === n && r === n) return [ "" ];

    const key = l + "," + r;
    if (memo.has(key)) return memo.get(key);

    const res = [];

    if (l < n) {
        const rest = generateParenthesis(n, l + 1, r, memo);
        for (let pair of rest) {
            res.push("(" + pair);
        }
    } 
    
    if (r < l) {
        const rest = generateParenthesis(n, l, r + 1, memo);
        for (let pair of rest) {
            res.push(")" + pair);
        }
    }

    memo.set(key, res);
    return res;
};