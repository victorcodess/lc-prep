/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) { // Time: O(c^n), Space: O(c^n) 
    const res = [];
    const curr = [];

    function isPalin(l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }

        return true;
    }

    function dfs(i) {
        if (i >= s.length) {
            const ans = curr.slice();
            res.push(ans);
            return;
        }

        for (let j = i; j < s.length; j++) {
            if (isPalin(i, j)) {
                const window = s.slice(i, j + 1);
                curr.push(window);
                dfs(j + 1);
                curr.pop();
            }
        } 
    }

    dfs(0);

    return res;
};