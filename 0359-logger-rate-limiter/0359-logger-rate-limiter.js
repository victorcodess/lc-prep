
var Logger = function() {
    this.logs = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (!this.logs.has(message)) {
        this.logs.set(message, timestamp + 10);
        return true;
    }

    const t = this.logs.get(message);
    if (timestamp < t) {
        return false;
    } else {
        this.logs.set(message, timestamp + 10);
        return true;
    }


};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */