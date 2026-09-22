/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) { // Time: O(n), Space: O(n)
    const dummy = new ListNode(null);
    let root = dummy;

    let l1 = list1;
    let l2 = list2;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            root.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            root.next = new ListNode(l2.val);
            l2 = l2.next;
        }

        root = root.next;
    }

    root.next = l1 || l2;

    return dummy.next;
};