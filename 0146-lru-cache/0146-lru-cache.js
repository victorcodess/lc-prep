class DoublyNode {
    constructor(key) {
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.limit = capacity;

    this.left = new DoublyNode(null);
    this.right = new DoublyNode(null);
    this.left.next = this.right;
    this.right.prev = this.left;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        this.useKey(key);

        return this.cache.get(key);
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (!this.cache.has(key)) {
        this.cache.set(key, value);

        const node = new DoublyNode(key);
        const prev = this.right.prev;

        node.prev = prev;
        node.next = this.right;

        prev.next = node;
        this.right.prev = node;

        if (this.cache.size > this.limit) {
            const lru = this.left.next;
            const next = lru.next;
            this.left.next = next;
            next.prev = this.left;

            lru.next = null;
            lru.prev = null;

            this.cache.delete(lru.key);
        }
    } else {
        this.useKey(key);

        this.cache.set(key, value);
    }
    
};

LRUCache.prototype.useKey = function(key) {
    let node = this.left;

    while (node.key !== key) {
        node = node.next;
    }

    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;

    const prevR = this.right.prev;
    prevR.next = node;
    node.prev = prevR;
    node.next = this.right;
    this.right.prev = node;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */