/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) { // Time: O(n^2), Space: O(n)
    let str = s.split("").map((ch) => ch.toLowerCase())
    .filter((ch) => (ch.charCodeAt(0) >= "a".charCodeAt(0) && ch.charCodeAt(0) <= "z".charCodeAt(0) || ch.charCodeAt(0) >= "0".charCodeAt(0) && ch.charCodeAt(0) <= "9".charCodeAt(0)));

    let ostr = str.join("");
    let rev = str.reverse().join("");

    return ostr === rev;
};