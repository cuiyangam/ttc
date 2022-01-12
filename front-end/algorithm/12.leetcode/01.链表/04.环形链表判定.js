/**
 * 141. 环形链表
 * https://leetcode-cn.com/problems/linked-list-cycle/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function (first) {
    let head = new ListNode();
    head.next = first;

    if (head.next === null) return false;  // 空链表一定无环
    let fast = head;  // 将快指针指向单链表的第一个元素
    let slow = head;  // 将慢指针指向单链表的第一个元素
    while (fast && fast.next) {  // 保证迭代有意义，保证指针不越界
        fast = fast.next.next;  // 快指针走两步
        slow = slow.next;  // 慢指针走一步
        if (slow === fast) {  // 快慢指针相遇
            // 开始计算环的长度
            return true;
            // let length = 0;  // 环的长度
            // let start = slow;  // 备份相遇点，求环入口时候用
            // while(slow){  // 迭代环
            //   ++length;  // 环长度加一
            //   if(slow.next === start) break;  // 迭代完成
            //   slow = slow.next;  // 步进1
            // }
            // // 开始计算环的入口节点位置
            // let behind = head;  // 从头结点开始走
            // let front = start;  // 从相遇节点开始走
            // let extryPoint = 0;  // 入口点位置
            // while(behind !== front){  // 两节点相遇位置即为环的入口节点,证明在同级目录
            //   ++extryPoint;  // 迭代加1，头结点位置为0
            //   behind = behind.next;  // 步进1
            //   front = front.next;  // 步进1
            // }
            // return {hasCircle: true, length: length, position: extryPoint};  // 返回环的相关信息
        }
    }
    return false;  // 检测结果为无环
}
