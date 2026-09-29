/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) { // Time: O(n), Space: O(n)
    const oldToCopy = new Map();
    oldToCopy.set(null, null);

    let old = head;
    while (old) {
        oldToCopy.set(old, new _Node(old.val));
        old = old.next;
    }

    old = head;

    while (old) {
        const copy = oldToCopy.get(old);
        copy.next = oldToCopy.get(old.next);
        copy.random = oldToCopy.get(old.random);

        old = old.next;
    }

    return oldToCopy.get(head);
};