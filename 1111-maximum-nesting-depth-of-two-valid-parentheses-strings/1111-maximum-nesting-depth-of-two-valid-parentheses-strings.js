/**
 * @param {string} seq
 * @return {number[]}
 */
// var maxDepthAfterSplit = function(seq) { // Time: O(n), Space: O(n)
//     let one = false;
//     const stack = [];
//     const res = new Array(seq.length).fill(0);

//     for (let i = 0; i < seq.length; i++) {
//         if (seq[i] === "(") {
//             stack.push(["(", i]);
//             if (i + 1 < seq.length && seq[i + 1] === "(") one = !one;
//         } else {
//             const [prev, pIdx] = stack.pop();
//             res[pIdx] = Number(one);
//             res[i] = Number(one);
            
//             if (i + 1 < seq.length && seq[i + 1] === ")") one = !one;
//         }
//     }

//     return res;
// };
var maxDepthAfterSplit = function(seq) { // Time: O(n), Space: O(n)
    let depth = 0;
    const res = new Array(seq.length).fill(0);

    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === "(") {
            depth++;
            res[i] = depth % 2;
        } else {
            res[i] = depth % 2;
            depth--;
        }
    }

    return res;
};