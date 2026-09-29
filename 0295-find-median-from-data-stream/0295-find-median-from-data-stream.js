
var MedianFinder = function() {
    this.small = new MaxPriorityQueue();
    this.large = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.large.isEmpty() || num > this.large.front()) {
        this.large.enqueue(num);
    } else {
        this.small.enqueue(num);
    }

    if (this.large.size() - this.small.size() > 1) {
        this.small.enqueue(this.large.dequeue());
    } else if (this.small.size() - this.large.size() > 1) {
        this.large.enqueue(this.small.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const total = this.small.size() + this.large.size();

    if (total % 2 === 0) {
        const left = this.small.front(); 
        const right = this.large.front(); 

        return (left + right) / 2;
    } else {
        if (this.small.size() < this.large.size()) {
            return this.large.front();
        } else {
            return this.small.front();
        }
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */