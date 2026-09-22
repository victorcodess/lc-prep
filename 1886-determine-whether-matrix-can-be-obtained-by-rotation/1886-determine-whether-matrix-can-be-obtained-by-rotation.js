/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) { // Time: O(n^2), Space: O(1)
    if (isSame(mat, target)) return true;

    let count = 0;
    while (count < 4) {
        rotate(mat);
        count++;

        if (isSame(mat, target)) return true;
    }

    return false;
};

function rotate(mat) {
    for (let r = 0; r < mat.length; r++) {
        for (let c = r + 1; c < mat[0].length; c++) {
            [mat[r][c], mat[c][r]] = [mat[c][r], mat[r][c]];
        }
    }

    for (let row of mat) {
        row.reverse();
    }
}

function isSame(mat1, mat2) {
    for (let r = 0; r < mat1.length; r++) {
        for (let c = 0; c < mat1[0].length; c++) {
            if (mat1[r][c] !== mat2[r][c]) return false;
        }
    }

    return true;
}