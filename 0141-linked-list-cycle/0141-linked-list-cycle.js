/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) { // Time: O(n), Space: O(1)
    let slow = head;
    let fast = head;

    while (slow) {
        slow = slow ? slow.next : null;
        const nxt = fast ? fast.next : null;
        fast = nxt ? nxt.next : null;

        if (slow && slow === fast) return true;
    }
    
    return false;
};