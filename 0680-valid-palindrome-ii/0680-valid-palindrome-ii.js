/**
 * @param {string} s
 * @return {boolean}
 */
// var validPalindrome = function(s, i = 0, j = s.length - 1, used = false) { // Time: O(n), Space: O(n)
//     if (i >= j) return true;

//     if (s[i] === s[j]) return validPalindrome(s, i + 1, j - 1, used);

//     return used ? false : validPalindrome(s, i, j - 1, true) || validPalindrome(s, i + 1, j, true);
// };

var validPalindrome = function(s) { // Time: O(n), Space: O(1)
    let i = 0;
    let j = s.length - 1;

    function isPalin(l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            
            l++;
            r--;
        }

        return true;
    }

    while (i < j) {
        if (s[i] !== s[j]) return isPalin(i, j - 1) || isPalin(i + 1, j);

        i++;
        j--;
    }

    return true;
};