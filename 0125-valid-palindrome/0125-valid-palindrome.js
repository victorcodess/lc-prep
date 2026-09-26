/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) { // Time: O(n), Space: O(n)
//     let str = s.split("").map((ch) => ch.toLowerCase())
//     .filter((ch) => (ch.charCodeAt(0) >= "a".charCodeAt(0) && ch.charCodeAt(0) <= "z".charCodeAt(0) || ch.charCodeAt(0) >= "0".charCodeAt(0) && ch.charCodeAt(0) <= "9".charCodeAt(0)));

//     let ostr = str.join("");
//     let rev = str.reverse().join("");

//     return ostr === rev;
// };

var isPalindrome = function(s) { // Time: O(n), Space: O(1)
    let i = 0;
    let j = s.length - 1;

    function isAlphaNum(ch) {
        const alpha = ch >= "a" && ch <= "z";
        const num = ch >= "0" && ch <= "9";

        return alpha || num;
    }

    while (i < j) {
        const l = s[i].toLowerCase();
        const r = s[j].toLowerCase();

        if (!isAlphaNum(l)) {
            i++;
        } else if (!isAlphaNum(r)) {
            j--;
        } else {
            if (l !== r) {
                return false;
            } else {
                i++;
                j--;
            }
        }
    }
    
    return true;
};