/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) { // Time: O(nlog(m)), Space: O(1)
    const maxK = Math.max(...piles);
    let minK = Infinity;
    let l = 1;
    let r = maxK;

    function findHrs(k) {
        let res = 0;

        for (let p of piles) {
            res += Math.ceil(p / k);
        }

        return res;
    }

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const hrs = findHrs(mid);

        if (hrs > h) {
            l = mid + 1;
        } else {
            minK = Math.min(minK, mid);
            r = mid - 1;
        }
    }

    return minK;
};