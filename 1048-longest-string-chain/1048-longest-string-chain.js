/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) { // Time: O(n * n * l), Space: O(n * n)
    let n = words.length;
    const memo = Array.from({ length: n + 1 }, () => Array(n + 1).fill(-1));
    words.sort((a, b) => a.length - b.length);

    function isSuccessor(curr, next) {
        if (next.length - curr.length !== 1) return false;

        let i = 0;
        let j = 0;

        while (i < curr.length && j < next.length) {
            if (curr[i] !== next[j]) {
                j++;
            } else {
                i++;
                j++;
            }
        }

        return i === curr.length;
    }

    function dfs(i, prev) {
        if (i >= n) return 0;
        if (prev !== -1 && memo[i][prev] !== -1) return memo[i][prev];

        let skip = dfs(i + 1, prev);
        let take = 0;

        if (prev === -1 || isSuccessor(words[prev], words[i])) {
            take = 1 + dfs(i + 1, i);
        }

        const res = Math.max(skip, take);

        memo[i][prev] = res;
        return res;
    }

    return dfs(0, -1);
};