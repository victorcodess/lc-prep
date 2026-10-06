
var RecentCounter = function() {
    this.arr = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.arr.push(t);

    let l = 0;
    let r = this.arr.length - 1;
    let lim = t - 3000;

    while (l < r) {
        const mid = Math.floor((l + r) / 2);

        if (this.arr[mid] >= lim) {
            r = mid;
        } else if (this.arr[mid] < lim) {
            l = mid + 1;
        }
    }

    return this.arr.length - r;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */