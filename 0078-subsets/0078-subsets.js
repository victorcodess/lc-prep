/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums, i = 0) { // Time: O(n * 2^n), Space: O(n * 2^n)
//     if (i >= nums.length) return [[]];

//     const first = nums[i];

//     const withoutFirst = subsets(nums, i + 1);

//     const withFirst = [];

//     for (let sub of withoutFirst) {
//         withFirst.push([first, ...sub]);
//     }

//     return [...withFirst, ...withoutFirst];
// };

var subsets = function(nums) { // Time: O(n * 2^n), Space: O(n * 2^n)
   const result = [];
   const subs = [];

   function backtrack(i) {
        if (i >= nums.length) {
            result.push([...subs]);
            return;
        }
        
        subs.push(nums[i]);

        backtrack(i + 1);

        subs.pop();

        backtrack(i + 1);
   }
   
   backtrack(0);

   return result;
};