/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) { // Time: O(n), Space: O(n)
    const buckets = new Array(numRows).fill(null).map(() => []);

    let i = 0;

    while (i < s.length) {
        let k = 0;

        while (k < numRows && i < s.length) {
            buckets[k].push(s[i]);
            k++;
            i++;
        }

        k -= 2;

        while (k > 0 && i < s.length) {
            buckets[k].push(s[i]);
            k--;
            i++;
        }
    }

    const result = [];

    for (let arr of buckets) {
        for (let ch of arr) {
            result.push(ch);
        }
    }
    
    return result.join("");
};