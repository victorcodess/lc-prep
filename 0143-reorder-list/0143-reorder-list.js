/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) { // Time: O(n), Space: O(1)
    // find end of first and start of second halves
    let slow = head;
    let fast = head;
    let end = null;

    while (fast !== null) {
        end = slow;
        slow = slow.next;
        fast = fast.next;
        if (fast) fast = fast.next;
    }

    // disconnect first and reverse second half
    end.next = null;

    let prev = null;
    curr = slow;

    while (curr) {
        nxt = curr.next;
        curr.next = prev;

        prev = curr;
        curr = nxt;
    }

    // merge first and second halves
    let first = head;
    let second = prev;

    while (first && second) {
        const nxtF = first.next;
        const nxtS = second.next;

        first.next = second;
        second.next = nxtF;

        first = nxtF;
        second = nxtS;
    }
};