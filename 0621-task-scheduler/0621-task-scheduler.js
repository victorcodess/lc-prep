/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) { // Time: O(n + nlog(26)), Space: O(26)
    const maxHeap = new MaxPriorityQueue((ch) => ch[1]);

    const map = new Map();
    for (let ch of tasks) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let [ch, f] of map) {
        maxHeap.enqueue([ch, f]);
    }

    const q = [];
    let head = 0;
    let time = 0;

    while (!maxHeap.isEmpty() || head < q.length) {
        while (head < q.length && q[head][2] <= time) {
            maxHeap.enqueue([q[head][0], q[head][1]]);
            head++;
        }

        if (!maxHeap.isEmpty()) {
            const [curr, freq] = maxHeap.dequeue();

            if (freq > 1) {
                q.push([curr, freq - 1, time + n + 1]);
            }
        }
        
        time++;
    }

    return time;
};