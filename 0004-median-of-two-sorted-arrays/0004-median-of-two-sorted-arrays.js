/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 
// var findMedianSortedArrays = function(nums1, nums2) {
//     let merged = [];
//     nums1.reverse()
//     nums2.reverse()

//     while (nums1.length > 0 && nums2.length > 0) {
//         if (nums1[nums1.length - 1] < nums2[nums2.length - 1]) {
//             merged.push(nums1.pop())
//         } else {
//             merged.push(nums2.pop())
//         }
//     }

//     merged.push(...nums1.reverse())
//     merged.push(...nums2.reverse())

//     let mid = Math.floor((merged.length - 1) / 2);
//     let result = 0;

//     if (merged.length % 2 === 0) {
//         result = (merged[mid] + merged[mid + 1]) / 2;
//     } else {
//         result = merged[mid];
//     }

//     return result;
// };

var findMedianSortedArrays = function(nums1, nums2) { // Time: O(log(min(m + n))), Space: O(1)
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const A = nums1;
    const B = nums2;

    const total = A.length + B.length;
    const half = Math.ceil(total / 2);

    let l = 0;
    let r = A.length;

    while (l <= r) {
        const i = Math.floor((l + r) / 2);
        const j = half - i;

        const Aleft = i === 0 ? -Infinity : nums1[i - 1];
        const Aright = i === A.length ? Infinity : nums1[i];

        const Bleft = j === 0 ? -Infinity : nums2[j - 1];
        const Bright = j === B.length ? Infinity : nums2[j];

        if (Aleft <= Bright && Bleft <= Aright) {
            if (total % 2 !== 0) {
                return Math.max(Aleft, Bleft);
            }

            const left = Math.max(Aleft, Bleft);
            const right = Math.min(Aright, Bright);

            return (left + right) / 2;
        }

        if (Aleft > Bright) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }
};