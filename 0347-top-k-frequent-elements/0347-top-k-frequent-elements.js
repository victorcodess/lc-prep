/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) { // Time: O(nlog(n)), Space: O(n)
    const freqMap = new Map();
    const minHeap = new MinPriorityQueue((num) => num[1]);

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (let [val, freq] of freqMap) {
        minHeap.enqueue([val, freq]);

        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }

    const result = [];

    while (minHeap.size() > 0) {
        result.push(minHeap.dequeue()[0]);
    }

    return result;
};