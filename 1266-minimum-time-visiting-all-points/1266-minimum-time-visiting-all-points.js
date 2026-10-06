/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) { // Time: O(n * m), Space: O(1)
    let minS = 0;

    function fromTo(p1, p2) {
        let [x1, y1] = p1;
        let [x2, y2] = p2;

        let dx = x2 - x1;
        let dy = y2 - y1;
        let xx = 0;
        let yy = 0;

        let steps = 0;

        if (dx >= 0 && dy >= 0) {
            xx = 1;
            yy = 1;
        } else if (dx >= 0) {
            xx = 1;
            yy = -1;
        } else if (dy >= 0) {
            xx = -1;
            yy = 1;
        } else {
            xx = -1;
            yy = -1;
        }

        while (x1 !== x2 && y1 !== y2) {
            x1 += xx;
            y1 += yy;
            steps++;
        }

        dx = x2 - x1;
        dy = y2 - y1;

        if (dx === 0 && dy === 0) return steps;
        else return steps + Math.abs(dx) + Math.abs(dy);
    }

    for (let i = 0; i < points.length - 1; i++) {
        minS += fromTo(points[i], points[i + 1]);
    }

    return minS;
};