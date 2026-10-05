/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, i = 0, j = s.length - 1, used = false) { // Time: O(n), Space: O(n)
    if (i >= j) return true;

    if (s[i] === s[j]) return validPalindrome(s, i + 1, j - 1, used);

    return used ? false : validPalindrome(s, i, j - 1, true) || validPalindrome(s, i + 1, j, true);
};