/**
 * 24.两两交换链表中的节点 https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (first) {
    // 添加不存储数值的头结点
    let head = new ListNode();
    head.next = first;

    let prev = head;
    while (prev.next && prev.next.next) {
        let start = prev.next;
        let end = prev.next.next;
        prev.next = end;
        start.next = end.next;
        end.next = start;
        prev = start;
    }
    return head.next;
}
