/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) { // Time: O(n), Space: (1)
    if (left === right) return head;

    const dummy = new ListNode(0, head);
    let pred = dummy;

    for (let i = 1; i < left; i++) {
        pred = pred.next;
    }

    let curr = pred.next;
    let end = pred.next;
    let prev = null;

    for (let i = 0; i < right - left + 1; i++) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    pred.next = prev;
    end.next = curr;

    return dummy.next;
};