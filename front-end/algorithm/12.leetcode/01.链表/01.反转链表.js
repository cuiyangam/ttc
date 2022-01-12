/**
 * 链表操作的关键点，记录好下一个迭代所需要的节点
 * 
 * 206.反转链表 https://leetcode-cn.com/problems/reverse-linked-list/
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
 * @return {ListNode}
 */
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
