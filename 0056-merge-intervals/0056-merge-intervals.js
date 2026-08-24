/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) { // Time: O(nlogn), Space: O(n)
    intervals.sort((a, b) => a[0] - b[0]);
    const stack = [intervals[0]];
    let i = 1;

    while (i < intervals.length) {
        const [prevS, prevE] = stack[stack.length - 1];
        const [currS, currE] = intervals[i];
        const minS = Math.min(currS, prevS);
        const maxS = Math.max(currS, prevS);
        const minE = Math.min(currE, prevE);
        const maxE = Math.max(currE, prevE);

        const final = intervals[i];

        if ((minE - maxS) >= 0) {
            stack.pop();
            stack.push([minS, maxE]);
        } else {
            stack.push(intervals[i]);
        }

        i++;
    }

    return stack;
};