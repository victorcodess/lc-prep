/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var characterReplacement = function(s, k) { // Time: O(n), Space O(n)
//     const chars = new Map();
//     let maxF = 0;
//     let maxSub = 0;

//     let l = 0;

//     for (let r = 0; r < s.length; r++) {
//         const chR = s[r];
//         chars.set(chR, (chars.get(chR) || 0) + 1);
//         maxF = Math.max(maxF, chars.get(chR));

//         let len = r - l + 1;
//         let need = len - maxF;

//         while (need > k) {
//             const chL = s[l];
//             const frL = chars.get(chL);
//             chars.set(chL, chars.get(chL) - 1);
            
//             l++;

//             len = r - l + 1;
//             maxF = Math.max(...chars.values());
//             need = len - maxF;
//         }

//         maxSub = Math.max(maxSub, len);
//     }

//     return maxSub;
// };

var characterReplacement = function(s, k) { // Time: O(n), Space O(n)
    const chars = new Array(26).fill(0);
    let maxF = 0;
    let maxSub = 0;

    let l = 0;

    for (let r = 0; r < s.length; r++) {
        const chR = s[r];
        const idxR = chR.charCodeAt(0) - "A".charCodeAt(0);
        chars[idxR]++;
        
        maxF = Math.max(maxF, chars[idxR]);

        let len = r - l + 1;
        let need = len - maxF;

        while (len - maxF > k) {
            const chL = s[l];
            const idxL = chL.charCodeAt(0) - "A".charCodeAt(0);
            chars[idxL]--;
            
            l++;

            len = r - l + 1;
            maxF = Math.max(...chars);
        }

        maxSub = Math.max(maxSub, len);
    }

    return maxSub;
};