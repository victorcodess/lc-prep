/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) { // Time: O(n * n), Space: O(n)
    let maxP = s[0] || "";

    function findP(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if ((r - l + 1) > maxP.length) maxP = s.slice(l, r + 1);

            l--;
            r++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        findP(i, i + 1);
        findP(i, i);
    }

    return maxP;
};