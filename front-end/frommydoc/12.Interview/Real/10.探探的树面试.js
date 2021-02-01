/**
 * 原数据保存在数组，依次填在完全二叉树中
 * 交换每个节点的左右子树后输出结果
 */
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class fullBinaryTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  addChild(node, value) {
    if (node === null) {
      ++this.size;
      return new Node(value);
    }
    if (!node.left) {
      node.left = this.addChild(node, value);
      return node;
    }
    if (!node.right) {
      node.right = this.addChild(node, value);
      return node;
    }
    node = node.left
  }
}
function BinaryInit(a, index, len) {
  if (index > len - 1)
    return null;
  let pNode = new Node();
  pNode.value = a[index];
  pNode.left = BinaryInit(a, 2 * index + 1, len);
  pNode.right = BinaryInit(a, 2 * index + 2, len);
  return pNode;
}
a = [1, 2, 3, 4, 5, 6, 7];
let node;
node = BinaryInit(a, 0, a.length);
// console.log(node)

function exchange(node) {
  let q = [];
  q.push(node);
  while (q.length !== 0) {
    let node = q.shift();
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
}
exchange(node);
console.log(node)