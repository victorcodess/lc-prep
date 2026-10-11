/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) { // Time: O(nlog(n)), Space: O(n)
    intervals.sort((a, b) => a[0] - b[0]);

    const minHeap = new MinPriorityQueue();
    minHeap.enqueue(intervals[0][1]);

    for (let i = 1; i < intervals.length; i++) {
        const [currS, currE] = intervals[i];

        if (currS >= minHeap.front()) {
            minHeap.dequeue();
        }

        minHeap.enqueue(currE);
    }

    return minHeap.size();
};