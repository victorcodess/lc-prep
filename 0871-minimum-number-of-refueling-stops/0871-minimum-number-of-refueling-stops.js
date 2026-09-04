/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) { // Time: O(n), Space: O(n)
    const maxHeap = new MaxPriorityQueue();
    let fuel = startFuel;
    let stops = 0;
    let i = 0;

    while (fuel < target) {
        while (i < stations.length && fuel >= stations[i][0]) {
            maxHeap.enqueue(stations[i][1]);
            i++;
        }

        if (maxHeap.isEmpty()) return -1;

        fuel += maxHeap.dequeue();
        stops++;
    }

    return stops;
};