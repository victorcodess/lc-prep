/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) { // Time: O(n * m), Space: O(m)
    let maxP = s[0];

    function findP(l, r) {
        if (s[l] !== s[r]) return;

        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if ((r - l + 1) > maxP.length) maxP = s.slice(l, r + 1);

            l--;
            r++;
        }

        return;
    }

    for (let i = 0; i < s.length; i++) {
        findP(i, i + 1);
        findP(i, i);
    }

    return maxP;
};