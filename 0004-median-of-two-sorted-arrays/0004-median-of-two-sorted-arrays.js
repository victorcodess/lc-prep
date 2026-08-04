/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [];
    nums1.reverse()
    nums2.reverse()

    while (nums1.length > 0 && nums2.length > 0) {
        if (nums1[nums1.length - 1] < nums2[nums2.length - 1]) {
            merged.push(nums1.pop())
        } else {
            merged.push(nums2.pop())
        }
    }

    merged.push(...nums1.reverse())
    merged.push(...nums2.reverse())

    // console.log(merged);

    let mid = Math.floor((merged.length - 1) / 2);
    let result = 0;

    if (merged.length % 2 === 0) {
        result = (merged[mid] + merged[mid + 1]) / 2;
    } else {
        result = merged[mid];
    }

    return result;
};