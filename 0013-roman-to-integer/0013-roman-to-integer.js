/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) { // Time: O(n), Space: O(1)
    const syms = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }

    let sum = 0;
    let i = 0;

    while (i < s.length) {
        const ch = s[i];
        let val = syms[ch];
        let skip = 0;

        if (i + 1 < s.length) {
            const nextCh = s[i + 1];

            if (
                ch === "I" && (nextCh === "V" || nextCh === "X") ||
                ch === "X" && (nextCh === "L" || nextCh === "C") ||
                ch === "C" && (nextCh === "D" || nextCh === "M")
            ) {
                val = syms[nextCh] - val;
                skip = 1;
            }
        }

        sum += val;
        i += 1 + skip;
    }

    return sum;
};