/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) { // Time: O(n), Space: O(n)
    let one = false;
    const stack = [];
    const res = new Array(seq.length).fill(0);

    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === "(") {
            stack.push(["(", i]);
            if (seq[i + 1] === "(") one = !one;
        } else {
            const [prev, pIdx] = stack.pop();
            res[pIdx] = Number(one);
            res[i] = Number(one);
            
            if (seq[i + 1] === ")") one = !one;
        }
    }

    return res;
};