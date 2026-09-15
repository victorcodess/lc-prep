/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) { // Time: O(n + m), Space: O(max(n, m))
    let carry = false;

    let n1 = l1;
    let n2 = l2;

    const dummyHead = new ListNode(null);
    let root = dummyHead;

    while (n1 || n2 || carry) {
        const v1 = n1 ? n1.val : 0;
        const v2 = n2 ? n2.val : 0;

        const sum = v1 + v2 + Number(carry);

        const value = sum % 10;

        carry = Boolean(Math.floor(sum / 10));

        root.next = new ListNode(value);
        root = root.next;

        if (n1) n1 = n1.next;
        if (n2) n2 = n2.next;
    }

    return dummyHead.next;
};