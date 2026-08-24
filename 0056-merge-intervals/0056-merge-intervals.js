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

        if (currS <= prevE) {
            stack.pop();
            stack.push([prevS, Math.max(prevE, currE)]);
        } else {
            stack.push(intervals[i]);
        }

        i++;
    }

    return stack;
};