/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) { // Time: O(n), Space: O(n)
//     const maxLefts = new Array(height.length).fill(0);
//     const maxRights = new Array(height.length).fill(0);

//     let maxL = 0;
//     let maxR = 0;

//     for (let i = 0; i < height.length; i++) {
//         maxLefts[i] = maxL;
//         maxL = Math.max(maxL, height[i]);
//     }

//     for (let i = height.length - 1; i >= 0; i--) {
//         maxRights[i] = maxR;
//         maxR = Math.max(maxR, height[i]);
//     }

//     let totalWater = 0;

//     for (let i = 0; i < height.length; i++) {
//         const water = Math.min(maxLefts[i], maxRights[i]) - height[i];

//         if (water > 0) totalWater += water;
//     }

//     return totalWater;
// };

var trap = function(height) { // Time: O(n), Space: O(1)
    let totalWater = 0;
    let l = 0;
    let r = height.length - 1;
    let maxL = height[l];
    let maxR = height[r];

    while (l < r) {
        if (maxL < maxR) {
            l++;
            maxL = Math.max(maxL, height[l]);
            totalWater += maxL - height[l];
        } else {
            r--;
            maxR = Math.max(maxR, height[r]);
            totalWater += maxR - height[r];
        }
    }

    return totalWater;
};