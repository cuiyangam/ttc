/**
 * 双链表的增删改查
 * 带头结点 | 不带尾节点 | number类型数据
 * 
 */
class Node{
  constructor(data, next = null, previous = null) {  // 构造函数，指针默认为null
    this.data = data;  // 存储真实数据
    this.next = next;  // 存储后继的指针
    this.previous = previous;  // 存储前驱指针
  }
}

class DoublyLinkedNode {
  constructor(){  // 构造函数
    this.head = new Node('head');  // 创建一个头结点
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
    newNode.previous = node;  // 双链表额外操作：前驱指针指向node
    node.next = newNode;  // 找到最后一个节点，并将其指向新节点
  }

  insertAfter(targetNode, value){
    let newNode;  // 待插入单链表的新节点
    if(value instanceof Node){  // 如插入的值是Node类
      newNode = value;  // 直接将其赋值给 newNode
    }else{  // 如插入的值不是Node类
      newNode = new Node(value);  // 以其为参数实例化一个Node类
    }

    if (targetNode === null) return false;  // 插入节点不合法，返回false
    if(targetNode.next === null) {  // 尾部插入节点
      targetNode.next = newNode;  // 找到最后一个节点，并将其指向新节点
      newNode.previous = targetNode;  // 双链表额外需要操作前驱指针
    }else{  // 非尾部插入节点（注意双链表的插入要首先操作前驱指针指向，注意是否尾部插入）
      newNode.previous = targetNode;  // 双链表额外操作：新节点的前驱指针指向 目标节点
      targetNode.next.previous = newNode;  // 双链表额外操作：目标节点的下一个节点的前驱指针指向新节点（前驱指针修改完成）
      newNode.next = targetNode.next;  // 新节点指向被插入节点的后继节点
      targetNode.next = newNode;  // 被插入节点指向新节点（后继指针操作完成）
    }
  }

  deleteNode(value) {
    let node = this.head;  // 将单链表的头结点赋值给node
    while(node.next !== null && (node.next !== value && node.next.data !== value)){  // 如存在下一个节点 且 下一个节点没有命中目标节点
      node = node.next;  // 步进1
    }
    if(node.next === null ) return false;  // 未找到，返回false
    if(node.next.next === null){  // 被删除的节点在尾部
      node.next.previous = null;  // 双链表额外操作
      node.next = null;  // node不是最后一个节点，说明已找到，为node.next，删除
    }else{
      node.next.next.previous = node;  // 双链表额外操作
      node.next = node.next.next;  // 已找到待删除节点，其前驱节点为node。将其删除
    }
  }

  printAll() {  // 打印双链表
    let node = this.head.next;
    let str = '';
    while(node !== null){
      str += node.data + ' ';
      node = node.next;
    }
    console.log (str);
  }
}

// test
let link = new DoublyLinkedNode();
let data = [1,3,5,7,9];
for(let i =0; i < data.length; i++){
  // link.insertToHead(data[i]);
  link.insertToTail(data[i]);
}
link.printAll();

link.deleteNode(9)
link.printAll();
let lastNode = link.head.next;
while(lastNode.next){
  lastNode = lastNode.next
}
while(lastNode){
  console.log (lastNode.data);
  lastNode = lastNode.previous;
}
