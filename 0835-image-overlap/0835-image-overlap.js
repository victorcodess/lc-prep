/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) { // Time: O(n^4), Space: O(n^4)
    const pos1 = [];
    const pos2 = [];
    const N = img1.length;

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            if (img1[r][c] === 1) pos1.push([r, c]);
            if (img2[r][c] === 1) pos2.push([r, c]);
        }
    }

    let res = 0;
    let memo = new Map();

    for (let p1 of pos1) {
        for (let p2 of pos2) {
            const r = p2[0] - p1[0];
            const c = p2[1] - p1[1];

            const key = r + "," + c;
            memo.set(key, (memo.get(key) || 0) + 1);

            res = Math.max(res, memo.get(key));
        }
    }

    return res;
};