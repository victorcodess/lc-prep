/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) { // Time: O(nlog(S)), Space: O(1)
    let l = Math.max(...nums);
    let r = nums.reduce((a, b) => a + b, 0);
    let minS = r;

    function canSplit(maxS) {
        let subs = 1;
        let currS = 0;

        for (let num of nums) {
            currS += num;

            if (currS > maxS) {
                subs++;
                currS = num;
            }
        }

        return subs <= k;
    }

    while (l < r) {
        const mid = Math.floor((l + r) / 2);

        const canS = canSplit(mid);

        if (canS) {
            minS = Math.min(minS, mid);
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return minS;
};