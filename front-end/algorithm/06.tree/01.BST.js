let Queue = require('../04.queue/Queue');
/**
 * 二叉树：每个节点最多拥有两个子节点
 * 满二叉树：每个非叶子节点都有两个子节点
 * 完全二叉树：除了最底层，其他层的节点都被元素填满，且最底层从左到右填入
 */
class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BST{  // binary search tree
  constructor(){
    this.root = null;
    this.size = 0;
  }
  getSize(){
    return this.size;
  }
  isEmpty(){
    return this.size === 0;
  }
  addNode(v){
    this.root = this._addChild(this.root, v);
  }
  /**
   * 添加节点的时候要比较v 与 node节点的大小
   * @param {*} node 
   * @param {*} v 
   */
  _addChild(node, v){
    if(!node){  // 递归结束条件
      ++this.size;
      return new Node(v);
    }
    if(v < node.value){
      node.left = this._addChild(node.left, v);
    }else if(v > node.value){
      node.right = this._addChild(node.right, v);
    }
    return node;
  }

  /**
   * 递归版的先中后序遍历,三者都是深度优先遍历
   */
  preTravel(){
    this._pre(this.root);
  }
  _pre(node){
    if(node){
      console.log (node.value);
      this._pre(node.left);
      this._pre(node.right);
    }
  }
  _pre_nr(node){  // 非递归版的先序遍历 non-recursive
    if(node){
      let stack = [];
      stack.push(node);
      while(stack.length > 0){
        node = stack.pop();
        console.log (node.value);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
      }
    }
  }
  midTravel(){
    this._mid(this.root);
  }
  _mid(node){
    if(node){
      this._mid(node.left);
      console.log (node.value);
      this._mid(node.right);
    }
  }
  _mid_nr(node){
    if(node){
      let stack = [];
      while(stack.length > 0 || node){
        if(node){
          stack.push(node);
          node = node.left;
        }else{
          node = stack.pop();
          console.log (node);
          node = node.right;
        }
      }
    }
  }
  backTravel(){
    this._back_nr(this.root);
  }
  _back(node){
    if(node){
      this._back(node.left);
      this._back(node.right);
      console.log (node.value);
    }
  }
  _back_nr(node) {
    if (node) {
      let stack1 = [];
      let stack2 = [];
      // 后序遍历是先左再右最后根
      // 所以对于一个栈来说，应该先 push 根节点
      // 然后 push 右节点，最后 push 左节点
      stack1.push(node);
      while (stack1.length > 0) {
        node = stack1.pop();
        stack2.push(node);
        if (node.left) {
          stack1.push(node.left);
        }
        if (node.right) {
          stack1.push(node.right);
        }
      }
      while (stack2.length > 0) {
        console.log(stack2.pop().value);
      }
    }
  }

  /**
   * 广度优先遍历，利用队列实现
   */
  deepTravel(){
    if(!this.root) return null;
    let q = new Queue();
    q.enQueue(this.root);
    while(!q.isEmpty()){
      let node = q.deQueue();
      console.log (node.value);
      if(node.left) q.enQueue(node.left);
      if(node.right) q.enQueue(node.right);
    }
  }

  /**
   * 取得BST的最大最小值
   */
  getMin(){
    return this._getMin(this.root).value;
  }
  _getMin(node){
    if(!node.left) return node;
    return this._getMin(node.left);
  }
  getMax(){
    return this._getMax(this.root).value;
  }
  _getMax(node){
    if(!node.right) return node;
    return this._getMax(node.right);
  }

  /**
   * 在树中向下取整
   */
  floor(v){
    let node = this._floor(this.root, v);
    return node ? node.value : null;
  }
  _floor(node, v){  // 在以node为根节点的树中找到v的下界
    if(!node) return null;
    if(node.value === v) return v;
    if(v < node.value){  // 如果小于node，该下界一定在node或其左子树
      return this._floor(node.left, v)
    } else{
      let right = this._floor(node.right, v);
      if(right) return right;  // 递归结束，如在其右子树找到，一定比当前node大，优先返回
    }
    return node  // 递归结束
  }

  /**
   * 最小节点必然 没有子树 或者 只有一个右子树
   */
  deleteMin(){
    this.root = this._deleteMin(this.root)
  }
  _deleteMin(node){  // 删除node树的最小节点，返回node树
    if(node && !node.left) return node.right;
    node.left = this._deleteMin(node.left);
    return node;
  }

  /**
   * 删除节点
   */
  delete(v){
    this.root = this._delete(this.root, v);
  }
  _delete(node, v){
    if(!node) return null;
    if(node.value < v){  // 如果v大，则在右子树中删除v
      node.right = this._delete(node.right, v);  // 
    }else if(node.value > v){  // 如果v小，则在左子树中删除v
      node.left = this._delete(node.left, v);  // 
    }else{
      if(!node.left) return node.right;  // 左右子树仅有其一，则返回该子树
      if(!node.right) return node.left;

      let min = this._getMin(node.right);  // 左右子树都有的情况，取得右子树中的最小值
      min.right = this._deleteMin(node.right);  // 删除右子树中的最小值，并且将最小值节点的右指针指向 被删节点的右子树
      min.left = node.left;  // 将最小值节点的左指针指向 被删节点的左子树
      node = min;  // 返回该节点
    }
    return node;
  }
}
