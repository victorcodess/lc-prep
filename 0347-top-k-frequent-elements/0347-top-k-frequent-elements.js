/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function(nums, k) { // Time: O(nlog(k)), Space: O(n)
//     const freqMap = new Map();
//     const minHeap = new MinPriorityQueue((num) => num[1]);

//     for (let num of nums) {
//         freqMap.set(num, (freqMap.get(num) || 0) + 1);
//     }

//     for (let [val, freq] of freqMap) {
//         minHeap.enqueue([val, freq]);

//         if (minHeap.size() > k) {
//             minHeap.dequeue();
//         }
//     }

//     const result = [];

//     while (minHeap.size() > 0) {
//         result.push(minHeap.dequeue()[0]);
//     }

//     return result;
// };

var topKFrequent = function(nums, k) { // Time: O(n), Space: O(n)
    const freqMap = new Map();

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const buckets = new Array(nums.length + 1).fill(null).map(() => []);

    for (let [val, freq] of freqMap) {
       buckets[freq].push(val);
    }

    const result = [];

    for (let i = buckets.length - 1; i >= 0; i--) {
        const bucket = buckets[i];

        if (k <= 0) break;

        for (let num of buckets[i]) {
            result.push(num);
            k--;
        }
    }

    return result;
};