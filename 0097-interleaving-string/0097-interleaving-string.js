/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) { // Time: O(n * m), Space: O(n * m)
    if (s1.length + s2.length !== s3.length) return false;
    
    const memo = new Map();

    function dfs(i, j) {
        if (i >= s1.length && j >= s2.length) return true;
        const key = i + "," + j;
        if (memo.has(key)) return memo.get(key);

        const pos = i + j;
        if (s3[pos] !== s1[i] && s3[pos] !== s2[j]) return false;

        let one = false;
        let two = false;

        if (s3[pos] === s1[i]) {
           one = dfs(i + 1, j);
        }

        if (s3[pos] === s2[j]) {
            two = dfs(i, j + 1);
        }

        const res = one || two;

        memo.set(key, res);
        return res;
    }

    return dfs(0, 0);
};