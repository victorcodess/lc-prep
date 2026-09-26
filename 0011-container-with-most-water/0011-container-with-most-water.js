/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) { // Time: O(n), Space: O(n)
    const h = height;

    let l = 0;
    let r = h.length - 1;
    let maxA = 0;

    while (l < r) {
        const area = Math.min(h[l], h[r]) * (r - l);
        maxA = Math.max(maxA, area);

        if (h[l] <= h[r]) {
            l++;
        } else {
            r--;
        }
    } 

    return maxA;
};