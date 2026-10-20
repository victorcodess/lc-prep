/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) { // Time: O(n + m), Space: O(n + m)
    let N = nums1.length;
    let k = k1 + k2;
    let largestD = 0;
    let sumOfD = 0;
    let diffs = new Array(N).fill(0);

    // calcualte diffs, sum of diffs, and largest diff
    for (let i = 0; i < N; i++) {
        const diff = Math.abs(nums1[i] - nums2[i]);
        sumOfD += diff;
        largestD = Math.max(largestD, diff);
        diffs[i] = diff ;
    }

    // if k is sufficient for all diffs, return 0
    if (k >= sumOfD) return 0;

    // calculate frequencies of diffs
    const freq = new Array(largestD + 1).fill(0);

    for (let val of diffs) {
        freq[val]++;
    }

    // greedily reduce diffs by k, from largest to smallest
    for (let i = largestD; i >= 0; i--) {
        if (k <= 0) break;
        if (freq[i] === 0) continue;

        if (k >= freq[i]) {
            k -= freq[i];
            freq[i - 1] += freq[i];
            freq[i] = 0;
        } else {
            freq[i - 1] += k;
            freq[i] -= k;
            k = 0;
        }
    }

    // calculate sum of squared diffs
    let sumOfSquaredD = 0;

    for (let i = 0; i <= largestD; i++) {
        sumOfSquaredD += freq[i] * i * i;
    }

    return sumOfSquaredD;
};