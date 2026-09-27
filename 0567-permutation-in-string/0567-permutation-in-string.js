/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var checkInclusion = function(s1, s2) {
//     if (s1.length > s2.length) return false;

//     const need = new Map();

//     for (let ch of s1) {
//         need.set(ch, (need.get(ch) || 0) + 1);
//     }

//     for (let i = 0; i < s2.length; i++) {
//         if (need.has(s2[i])) {
//             let count = 0;
//             let j = i;

//             while (j < s2.length && need.has(s2[j])) {
//                 const ch = s2[j];

//                 if (need.get(ch) > 0) {
//                     need.set(ch, need.get(ch) - 1);
//                     count++;
//                     j++;
//                 } else {
//                     break;
//                 }
                
//                 if (count === s1.length) return true;
//             }

//         }
//     }

//     return false;
// };

var checkInclusion = function(s1, s2) { // Time: O(n), Space: O(1)
    if (s1.length > s2.length) return false;

    const need = new Array(26).fill(0);

    function getIdx(ch) {
        return (ch.charCodeAt(0) - "a".charCodeAt(0));
    }

    for (let ch of s1) {
        const idx = getIdx(ch);
        need[idx]++;
    }

    for (let i = 0; i < s2.length; i++) {
        // match chars
        const idx = getIdx(s2[i]);
        need[idx]--;

        // remove char outside window
        if (i >= s1.length) {
            const endIdx = i - s1.length;
            const endCh = s2[endIdx];
            const chIdx = getIdx(endCh);
            need[chIdx]++;
        }
        
        // check if all chars have been matched
        if (need.every((x) => x === 0)) return true;
    }

    return false;
};