/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t, i = 0, j = 0, memo = new Map()) { // Time: O(n * m), Space: O(n * m)
    if (i >= s.length && j < t.length) return 0;
    if (j >= t.length) return 1;

    const key = i + "," + j;
    if (memo.has(key)) return memo.get(key);

    let ways = 0;

    if (s[i] === t[j]) {
        const take = numDistinct(s, t, i + 1, j + 1, memo);
        const skip = numDistinct(s, t, i + 1, j, memo);

        ways += take + skip;
    } else {
        ways += numDistinct(s, t, i + 1, j, memo);
    }

    memo.set(key, ways);
    return ways;
};