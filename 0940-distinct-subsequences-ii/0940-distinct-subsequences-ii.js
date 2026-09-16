// /**
//  * @param {string} s
//  * @return {number}
//  */
// var distinctSubseqII = function(s) {
//     const memo = new Map()
//     const result = findSub(s, 0, memo);
//     const uniq = new Set();

//     for (let sub of result) {
//         if (!sub.length) continue;
//         uniq.add(sub.join(""));
//     }

//     return uniq.size;
// };

// var findSub = function(s, i, memo) {
//     if (i >= s.length) return [[]];
//     if (memo.has(i)) return memo.get(i);

//     const first = s[i];

//     const withoutFirst = findSub(s, i + 1, memo); 

//     const withFirst = [];

//     for (let sub of withoutFirst) {
//         withFirst.push([first, ...sub]);
//     }

//     memo.set(i, [...withFirst, ...withoutFirst]);
//     return [...withFirst, ...withoutFirst];
// };

/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) { // Time: O(n), Space: O(n)
    const subs = new Map();
    const MOD = (10 ** 9) + 7;

    for (let ch of s) {
        let total = 1;

        for (let [sub, count] of subs) {
            total += count % MOD;
        }

        subs.set(ch, total);
    }

    return [...subs.values()].reduce((a, b) => (a + b) % MOD, 0);
};

