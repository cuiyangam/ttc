/**
 * 堆是存储在数组结构中的树
 * 二叉堆的性质：1.任意节点大于它的所有子节点 2.是一个完全树
 * 根节点最大叫做大根堆
 * 根节点的索引为0，如果节点的索引为i，则其父节点为(i-1)/2,左子节点为(2*i+1)，右子节点为(2*i+2)
 */
module.exports = class MaxHeap{
  constructor(){
    this.heap = [];
  }
  size(){
    return this.heap.length;
  }
  empty(){
    return this.heap.length === 0;
  }
  getParentIndex(k){
    return parseInt((k - 1) / 2);
  }
  getLeftIndex(k){
    return k * 2 + 1;
  }
  add(item){
    this.heap.push(item);
    this._shiftUp(this.size() - 1);
  }
  removeMax(){
    this._shiftDown(0);
  }
  _shiftUp(k){  // 将节点与父节点对比大小，如果比父节点大，就和父节点交换位置
    while(this.heap[k] > this.heap[this.getParentIndex(k)]){  // 循环结束条件：this.heap[0] === this.heap[0]
      this._swap(k, this.getParentIndex(k));
      k = this.getParentIndex(k);
    }
  }
  _shiftDown(k){  // 1.将根节点与末尾节点交换位置 2. 移除末尾节点 3.如果根节点较小，下沉
    this._swap(k, this.size() - 1);
    this.heap.splice(this.size() -1, 1);
    while(this.getLeftIndex(k) < this.size()){
      let j = this.getLeftIndex(k);
      if(j + 1 < this.size() && this.heap[j + 1] > this.heap[j]) j++; // 选出索引为k的节点的左右子节点中较大者j
      if(this.heap[k]  >= this.heap[j]) break;  // 如果k节点大，则无需下沉
      this._swap(k, j);  // 如果k节点小，则与j交换位置
      k = j;  // 交换位置后k来到新的位置j,继续下沉，直到它大于 左右子节点
    }
  }
  _swap(left, right){
    let rightValue = this.heap[right];
    this.heap[right] = this.heap[left];
    this.heap[left] = rightValue;
  }
}