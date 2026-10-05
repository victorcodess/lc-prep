/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) { // Time: O(n * m), Space: O(n + m)
    const res = [[1]]
    
    for (let i = 1; i < numRows; i++) {
        const prev = res[res.length - 1];
        const next = [1];

        for (let j = 0; j < prev.length; j++) {
            const sum = prev[j] + (prev[j + 1] || 0);
            next.push(sum);
        }

        res.push(next);
    }

    return res;
};