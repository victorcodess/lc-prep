/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) { // Time: O(nlog(m)), Space: O(n + m)
    const result = [];
    const map = new Map();

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    const maxHeap = new MaxPriorityQueue((ch) => ch[1]);

    for (let [ch, freq] of map) {
        maxHeap.enqueue([ch, freq])
    }

    let prev = null;

    while (!maxHeap.isEmpty()) {
        const [ch, freq] = maxHeap.dequeue();

        result.push(ch);

        if (prev) maxHeap.enqueue(prev);

        prev = freq > 1 ? [ch, freq - 1] : null;
    }

    return prev ? "" : result.join("");
};