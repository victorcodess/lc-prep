/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) { // Time: O(1), Space: O(1)
    const [ax1, ay1, ax2, ay2] = rec1;
    const [bx1, by1, bx2, by2] = rec2;

    if (bx1 >= ax2) return false;

    if (ax1 >= bx2) return false;

    if (by1 >= ay2) return false;

    if (ay1 >= by2) return false;

    return true;
};