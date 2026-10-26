/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let n = words.length;
    const memo = Array.from({ length: n + 1 }, () => Array(n + 1).fill(null));
    words.sort((a, b) => a.length - b.length);
    let maxC = 0;

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
        if (prev >= 0 && words[i].length - words[prev].length !== 1) return 0;
        if (prev >= 0 && memo[i][prev] !== null) return memo[i][prev];

        let maxCC = 1;

        for (let k = i + 1; k < words.length; k++) {
            if (isSuccessor(words[i], words[k])) {
                let currC = 1 + dfs(k, i);
                maxCC = Math.max(maxCC, currC);
            }
        }

        memo[i][prev] = maxCC;
        return maxCC;
    }

    for (let i = 0; i < n; i++) {
        const len = dfs(i, -1);
        maxC = Math.max(len, maxC);
    }

    return maxC;
};