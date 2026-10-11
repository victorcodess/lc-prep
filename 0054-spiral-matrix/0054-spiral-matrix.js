/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) { // Time: O(n * m), Space: O(n * m)
    const res = [];
    const m = matrix;

    let t = 0;
    let b = m.length - 1;
    let l = 0;
    let r = m[0].length - 1;

    while (t <= b && l <= r) {
        // l to r
        for (let cell = l; cell <= r; cell++) {
            res.push(m[t][cell]);
        }

        t++;

        // t to b
        for (let cell = t; cell <= b; cell++) {
            res.push(m[cell][r]);
        }

        r--;

        // r to l
        if (t <= b) {
            for (let cell = r; cell >= l; cell--) {
                res.push(m[b][cell]);
            }

            b--;
        }
        
        // b to t
        if (l <= r) {
            for (let cell = b; cell >= t; cell--) {
                res.push(m[cell][l]);
            }

            l++;
        }
        
    }

    return res;
};