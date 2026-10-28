/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) { // Time: O(n * m), Space: O(n * m)
    const memo = new Map();

    function dfs(i, j) {
        if (i >= text1.length || j >= text2.length) return 0;

        const key = i + "," + j;
        if (memo.has(key)) return memo.get(key);

        let res = 0;

        if (text1[i] === text2[j]) {
            res = 1 + dfs(i + 1, j + 1);

            memo.set(key, res);
            return res;
        }

        const skipI = dfs(i + 1, j);
        const skipJ = dfs(i, j + 1);

        res = Math.max(skipI, skipJ);

        memo.set(key, res);
        return res;
    }

    return dfs(0, 0);
};