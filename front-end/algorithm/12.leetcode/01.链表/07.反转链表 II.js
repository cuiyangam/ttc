/**
 * 92. 反转链表 II
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
 */

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

var reverseBetween = function (head, left, right) {
    let [start, middle, end] = devide(head, left, right);
    middle = reverseList(middle);
    return compose(start, middle, end);
};

var reverseList = function (head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let temp = curr.next; // 备份 防止断链
        curr.next = prev; // 实现翻转的重复单元
        prev = curr; // 向前推进
        curr = temp; // 向前推进
    }
    return prev;
};

var devide = function (head, left, right) {
    let [start, middle, end] = [null, null, null];
    let index = 0;
    let dumpHead = new ListNode(NaN, head);
    let curr = dumpHead;
    while (curr) {
        if (left - 1 === index) {
            middle = curr.next;
            curr.next = null;
            curr = middle;
        } else if (right === index) {
            end = curr.next;
            curr.next = null;
            curr = end;
        } else {
            curr = curr.next;
        }
        index++;
    }
    return [dumpHead.next, middle, end];
}

var compose = function (start, middle, end) {
    let dumpHead = new ListNode(NaN, start);
    let curr = dumpHead;
    while (curr) {
        if (!curr.next) {
            curr.next = middle;
            break;
        }
        curr = curr.next;
    }
    curr = middle;
    while (curr) {
        if (!curr.next) {
            curr.next = end;
            break;
        }
        curr = curr.next;
    }
    return dumpHead.next;
}
