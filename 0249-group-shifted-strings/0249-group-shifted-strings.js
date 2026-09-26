/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) { // Time: O(n * m), Space: O(n)
    const groups = new Map();
    const result = [];

    function charCode(ch) {
        return ch.charCodeAt(0) - "a".charCodeAt(0);
    }

    for (let str of strings) {
        const cat = [];
        for (let i = 0; i < str.length - 1; i++) {
            const code1 = charCode(str[i])
            const code2 = charCode(str[i + 1]);
            const diff = (code2 - code1 + 26) % 26;

            cat.push(diff);
        }

        const key = String(cat.join(","));

        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(str);
    }

    for (let [cat, group] of groups) {
        result.push(group);
    }

    return result;
};