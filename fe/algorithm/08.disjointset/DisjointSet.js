/**
 * 并查集是一种特殊的树结构，用于判定无向图的连通性
 */
module.exports = class DisjointSet {
  constructor(count) {
    this.parent = new Array(count);  // 意义：第0~count-1 个元素的父节点是第x个元素(x属于0~count-1)
    this.rank = new Array(count);  // 用于记录树的深度，优化搜索复杂度
    for (let i = 0; i < count; i++) {
      this.parent[i] = i;  // 初始化时，每个节点的父节点都是自己
      this.rank[i] = 1;  // 初始化时只有自己，树高度为一
    }
  }
  find(p) {
    while (p != this.parent[p]) {  // 如果节点的父节点不为自身，则寻找其父节点的父节点
      this.parent[p] = this.parent[this.parent[p]];  // 优化操作：将p从其父节点挂载到爷爷节点，以减小树的深度
      p = this.parent[p];  // 迭代寻找根节点
    }
    return p;
  }
  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }
  
  union(p, q) {  // 合并
    let i = this.find(p);  // 找到两个数字所在树的根节点
    let j = this.find(q);  //  找到两个数字所在树的根节点
    if (i === j) return ;

    if (this.rank[i] < this.rank[j]) {  // 判断两棵树的深度，深度小的加到深度大的树下面
      this.parent[i] = j;
    } else if (this.rank[i] > this.rank[j]) {  // 判断两棵树的深度，深度小的加到深度大的树下面
      this.parent[j] = i;
    } else {   
      this.parent[i] = j;  // 如果两棵树深度相等，两种皆可
      this.rank[j] += 1;  // 被挂载的树高度加一
    }
  }
}

