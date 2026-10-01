/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) { // Time: O(nlog(S)), Space: O(1)
    const maxC = weights.reduce((a, b) => a + b, 0);
    let minC = maxC;
    let l = Math.max(...weights);
    let r = maxC;

    function findDays(capacity) {
        let count = 1;
        let sum = 0;
        let i = 0;

        while (i < weights.length) {
            if (sum + weights[i] > capacity) {
                count++;
                sum = 0;
            }

            sum += weights[i];

            i++;
        }

        return count;
    }

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const currDays = findDays(mid);

        if (currDays <= days) {
            minC = Math.min(minC, mid)
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return minC;
};