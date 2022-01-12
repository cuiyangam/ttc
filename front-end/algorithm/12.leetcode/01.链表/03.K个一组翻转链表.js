/**
 * 25. K 个一组翻转链表
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseList = function (head) {
    let start = head;
    let prev = null;
    let curr = head;
    while (curr) {
        let temp = curr.next; // 备份 防止断链
        curr.next = prev; // 实现翻转的重复单元
        prev = curr; // 向前推进
        curr = temp; // 向前推进
    }
    return [prev, start];
};

var sliceK = function (first, k) {
    let start = first;
    let curr = first;
    let i = 1;
    while (curr.next && i < k) {
        i++;
        curr = curr.next;
    }
    let length = i;
    let next = length === k ? curr.next : null;
    curr.next = null;
    return { start, next, length };
}

var reverseKGroup = function (first, k) {
    let head = new ListNode();
    head.next = first;

    let prev = head;
    while (prev.next) {
        let { start, next, length } = sliceK(prev.next, k);
        if (length === k) {
            let r = reverseList(start);
            prev.next = r[0];
            r[1].next = next;
            prev = r[1];
        } else {
            break;
        }
    }
    return head.next;
}
