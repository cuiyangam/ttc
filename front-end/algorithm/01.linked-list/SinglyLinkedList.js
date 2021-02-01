/**
 * 单链表的增删改查
 * 带头结点 | number类型数据
 * 
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 */
class Node{
  constructor(data, next = null){  // 构造函数，指针默认为null
    this.data = data;  // 存储真实数据
    this.next = next;  // 存储后继指针
  }
}

class SinglyLinkedList{
  constructor(){  // 构造函数
    this.head = new Node('head');  // 创建一个头结点
  }

  findByValue(value) {
    let node = this.head.next;  // 取得单链表第一个节点
    while(node !== null && node.data !== value){  // 依次遍历，直到遍历完 或者 找到目标值
      node = node.next;  // 步进1
    }
    return node;  // 如找到，返回目标节点；如没找到，返回null
  }

  findByIndex(index) {
    let node = this.head.next;  // 取得单链表第一个节点
    let pos = 0;  // 初始化为0
    while(node !== null && pos !== index){  // 依次遍历，直到遍历完 或者 到达目标索引
      node = node.next;  // 步进1
      ++pos;  // 索引加1
    }
    return node;  // 如找到，返回目标节点；如没找到，返回null
  }

  insertToHead(value){
    let newNode;  // 待插入单链表的新节点
    if(value instanceof Node){  // 如插入的值是Node类
      newNode = value;  // 直接将其赋值给 newNode
    }else{  // 如插入的值不是Node类
      newNode = new Node(value);  // 以其为参数实例化一个Node类
    }

    newNode.next = this.head.next;  // 新节点指向单链表的第一个节点
    this.head.next = newNode;  // 头结点指向新节点
  }

  insertToTail(value){
    let newNode;  // 待插入单链表的新节点
    if(value instanceof Node){  // 如插入的值是Node类
      newNode = value;  // 直接将其赋值给 newNode
    }else{  // 如插入的值不是Node类
      newNode = new Node(value);  // 以其为参数实例化一个Node类
    }

    let node = this.head;  // 取得单链表头结点
    while(node.next !== null){  // 如下一个节点存在
      node = node.next;  // 步进1
    }
    node.next = newNode;  // 找到最后一个节点，并将其指向新节点
  }

  // insertAfter 是 insertToHead 与 insertToTail 的一般化情况
  insertAfter(targetNode, value){
    let newNode;  // 待插入单链表的新节点
    if(value instanceof Node){  // 如插入的值是Node类
      newNode = value;  // 直接将其赋值给 newNode
    }else{  // 如插入的值不是Node类
      newNode = new Node(value);  // 以其为参数实例化一个Node类
    }

    if (targetNode == null) return false;  // 插入节点不合法，返回false
    newNode.next = targetNode.next;  // 新节点指向被插入节点的后继节点
    targetNode.next = newNode;  // 被插入节点指向新节点
  }

  insertBefore(targetNode, value) {
    let newNode;  // 待插入单链表的新节点
    if(value instanceof Node){  // 如插入的值是Node类
      newNode = value;  // 直接将其赋值给 newNode
    }else{  // 如插入的值不是Node类
      newNode = new Node(value);  // 以其为参数实例化一个Node类
    }

    if (targetNode == null) return false;  // 插入节点不合法，返回false
    let node = this.head;  // 将头结点赋值给node
    while(node.next !== null && node.next !== targetNode){  // 如下一个节点存在 且 不是目标节点
      node = node.next;  // 步进1
    }
    if(node.next === null) return false;  // 步进到了最后一个节点，仍未找到目标节点，则插入失败，返回false
    newNode.next = node.next;  // 目标节点的前驱节点为node，新节点指向node节点
    node.next = newNode;  // node节点指向新节点
  }

  deleteNode(value) {
    let node = this.head;  // 将单链表的头结点赋值给node
    while(node.next !== null && (node.next !== value && node.next.data !== value)){  // 如存在下一个节点 且 下一个节点没有命中目标节点
      node = node.next;  // 步进1
    }
    if(node.next === null ) return false;  // 未找到，返回false
    node.next = node.next.next;  // 已找到待删除节点，其前驱节点为node。将其删除
  }

  printAll() {  // 打印单链表
    let node = this.head.next;
    let str = '';
    while(node !== null){
      str += node.data + ' ';
      node = node.next;
    }
    console.log (str);
  }

  /**
   * 翻转单链表
   * @param {单链表} list 
   */
  static reverse(list){  // 前驱，当前，后继三节点组成一个视窗，步进地移动这个视窗便可翻转完成
    let previous = null;  // 初始化前驱节点
    let current = list.head.next;  // 初始化当前节点
    let next = null;   // 初始化后继节点
    while(current !== null){  // 迭代单链表
      next = current.next;  // 移动视窗，此时视窗定格
      current.next = previous;  // 翻转指针指向，即定格后的操作
      previous = current;  // 移动视窗
      current = next;  // 移动视窗
    }
    list.head.next = previous;  // 将头结点指向之前的“尾节点”
  }

  /**
   * 归并两个非递减的单链表
   * @param {待合并的单链表} La 
   * @param {待合并的单链表} Lb 
   */
  static mergeSortedLists(La, Lb){
    let pa = La.head.next;  // 取单链表a的第一个元素
    let pb = Lb.head.next;  // 取单链表b的第一个元素
    let Lc = new SinglyLinkedList();  // 创建单链表c
    let pc = Lc.head;  // 取单链表c的头结点

    while(pa && pb){  // 当a 与 b都没有遍历完，走该循环交叉归并
      if(pa.data <= pb.data){  // 取a, b链表中较小的值
        pc.next = pa;  // 单链表c的头结点指向a, b中较小的节点
        pc = pa;  // pc用来保存单链表c的最后一个节点，此时值为pa
        pa = pa.next;  // pa用来保存单链表a的第一个节点，此时值为pa.next
      }else{  // 同上
        pc.next = pb;
        pc = pb;
        pb = pb.next;
      }
    }
    pc.next = pa ? pa : pb;  // 当a, b中刚好有一个迭代完，则将c的最后一个节点指向另一个链表剩余部分的第一个节点
    return Lc;  // 返回带头结点的新单链表c,此时a与b已不复存在
  }

  /**
   * 取得单链表的中间节点
   * @param {单链表} list 
   */
  static findMiddleNode(list){  
    if(list.head.next === null) return null;  // 空链表返回null
    let slow = list.head.next;  // 第一个节点赋值给慢指针
    let fast = list.head.next;  // 第一个节点赋值给快指针
    while(fast.next !== null && fast.next.next !== null){  // 如果快指针的下个落点仍然在单链表上
      fast = fast.next.next;  // 快指针跳两部
      slow = slow.next;  // 慢指针跳一步
    }
    return slow;  // 如果链表中有i个元素，则中间节点为第Math.floor((i + 1)/2)个元素
  }

  /**
   * 删除倒数第k个元素
   * @param {单链表} list 
   * @param {倒数第k个} k 
   */
  static deleteLastKth(list, k){  
    let p = list.head.next;  // 获取单链表的第一个节点
    let length = 0;  // 初始化单链表长度
    while(p!== null){
      ++length;
      p = p.next;
    }
    if(length < k) return false;  // 如果k大于单链表长度，返回false
    let step = length - k;  // 步进的长度
    let q = list.head;  // q为待删除节点的前一个节点
    while(step-- > 0){  // 
      q = q.next;
    }
    let ret = q.next;
    q.next = q.next.next;  // 删除倒数正数第length - k + 1个节点
    return ret;
  }

  /**
   * 单链表内环的检测
   * @param {单链表} list 
   */
  static checkCircle(list){
    if(list.head.next === null) return false;  // 空链表一定无环
    let fast = list.head;  // 将快指针指向单链表的第一个元素
    let slow = list.head;  // 将慢指针指向单链表的第一个元素
    while(fast && fast.next){  // 保证迭代有意义，保证指针不越界
      fast = fast.next.next;  // 快指针走两步
      slow = slow.next;  // 慢指针走一步
      if(slow === fast) {  // 快慢指针相遇
        // 开始计算环的长度
        let length = 0;  // 环的长度
        let start = slow;  // 备份相遇点，求环入口时候用
        while(slow){  // 迭代环
          ++length;  // 环长度加一
          if(slow.next === start) break;  // 迭代完成
          slow = slow.next;  // 步进1
        }
        // 开始计算环的入口节点位置
        let behind = list.head;  // 从头结点开始走
        let front = start;  // 从相遇节点开始走
        let extryPoint = 0;  // 入口点位置
        while(behind !== front){  // 两节点相遇位置即为环的入口节点,证明在同级目录
          ++extryPoint;  // 迭代加1，头结点位置为0
          behind = behind.next;  // 步进1
          front = front.next;  // 步进1
        }
        return {hasCircle: true, length: length, position: extryPoint};  // 返回环的相关信息
      }
    }
    return false;  // 检测结果为无环
  }
}

// test
let link = new SinglyLinkedList();
let data = [1,3,5,7,9];
for(let i =0; i < data.length; i++){
  // link.insertToHead(data[i]);
  link.insertToTail(data[i]);
}
link.printAll();

link.deleteNode(9)
link.printAll();

// 1
// let link = new SinglyLinkedList();
// let data = [1,3,5,7,9];
// for(let i =0; i < data.length; i++){
//   link.insertToTail(data[i]);
// }
// link.printAll();
// SinglyLinkedList.reverse(link);
// console.log ("翻转后");
// link.printAll();

// 2
// console.log ("测试有序单链表合并start");
// let link = new SinglyLinkedList();
// let data = [1,3,5,7,9];
// for(let i =0; i < data.length; i++){
//   link.insertToTail(data[i]);
// }
// console.log ("合并前");
// link.printAll();

// let link2 = new SinglyLinkedList();
// let data2 = [2,4,6,8,10];
// for(let i =0; i < data2.length; i++){
//   link2.insertToTail(data2[i]);
// }
// console.log ("合并前");
// link2.printAll();

// let obj = SinglyLinkedList.mergeSortedLists(link, link2);
// console.log ("合并后");
// obj.printAll();
// console.log ("测试有序单链表合并end");

// 3
// console.log ("测试取中点start");
// let link = new SinglyLinkedList();
// let data = [1,3,5,7,9];
// for(let i =0; i < data.length; i++){
//   link.insertToTail(data[i]);
// }
// console.log (SinglyLinkedList.findMiddleNode(link).data);
// console.log ("测试取中点end");

// 4
// console.log ("测试删除倒数第K个元素start");
// let link = new SinglyLinkedList();
// let data = [1,3,5,7,9];
// for(let i =0; i < data.length; i++){
//   link.insertToTail(data[i]);
// }
// let obj = SinglyLinkedList.deleteLastKth(link, 2);
// link.printAll();
// console.log ("测试删除倒数第K个元素end");

// 5
// console.log ("测试环start");
// let link = new SinglyLinkedList();
// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
// let node5 = new Node(5);
// let node6 = new Node(6);
// let node7 = new Node(7);
// node1.next = node2; node2.next = node3; node3.next = node4; 
// node4.next = node5; node5.next = node6; node6.next = node7;
// link.head.next = node1;
// node7.next = node3;
// console.log (SinglyLinkedList.checkCircle(link));
// console.log ("测试环end");

