/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) { // Time: O(n), Space: O(n)
    const grps = new Map();

    for (let str of strs) {
        const arr = new Array(26).fill(0);

        for (let ch of str) {
            const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
            arr[idx] += 1;
        }

        const key = arr.join(",");
        if (!grps.has(key)) grps.set(key, []);

        grps.get(key).push(str);
    }

    return [...grps.values()];
    
};