/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function (tiles, carpetLen) { // Time: O(nlog(n)), Space: O(1)
    tiles.sort((a, b) => a[0] - b[0]);
    
    let l = 0;
    let covered = 0;
    let maxT = 0;

    for (let r = 0; r < tiles.length; r++) {
        const start = tiles[r][0];
        const end = start + carpetLen - 1;

        while (l < tiles.length && tiles[l][1] <= end) {
            covered += tiles[l][1] - tiles[l][0] + 1;
            l++;
        }

        let total = covered;

        if (l < tiles.length && tiles[l][0] <= end) {
            total += end - tiles[l][0] + 1;
        }

        maxT = Math.max(maxT, total);

        if (l > r) {
            covered -= tiles[r][1] - tiles[r][0] + 1;
        } else {
            l = r + 1;
        }
    }

    return maxT;
};