/**
 * @param {number} key
 * @param {number} val
 */
 class DoublyNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
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

    this.left = new DoublyNode(null, null);
    this.right = new DoublyNode(null, null);

    this.left.next = this.right;
    this.right.prev = this.left;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);

        this.remove(node);
        this.insert(node);

        return node.val;
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
        const node = new DoublyNode(key, value);
        this.insert(node);

        this.cache.set(key, node);

        if (this.cache.size > this.limit) {
            const lru = this.left.next;
            this.remove(lru);

            this.cache.delete(lru.key);
        }
    } else {
        const node = this.cache.get(key);
        node.val = value;

        this.remove(node);
        this.insert(node);

        this.cache.set(key, node);
    }
    
};

/**
 * @param {DoublyNode} node
 * @return {void}
 */
LRUCache.prototype.insert = function(node) {
    const prev = this.right.prev;
    
    prev.next = node;
    node.prev = prev;

    node.next = this.right;
    this.right.prev = node;
}

/**
 * @param {DoublyNode} node
 * @return {void}
 */
LRUCache.prototype.remove = function(node) {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;

    node.next = null;
    node.prev = null;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */