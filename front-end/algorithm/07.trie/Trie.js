/**
 * trie树又称前缀树或字典树，是一种有序树，可以高效的检索字符串
 * 特点：1.根节点代表空字符串，每个节点都有 N（假如搜索英文字符，就有 26 条） 条链接，每条链接代表一个字符
 *      2.节点不存储字符，只有路径才存储
 */
class TrieNode {
  constructor() {
    this.path = 0;  // 代表每个字符经过节点的次数
    this.end = 0;  // 代表到该节点的字符串有几个
    this.next = new Array(26).fill(null);  // 链接
  }
}
module.exports = class Trie {
  constructor() {
    this.root = new TrieNode();  // 根节点，代表空字符
  }
  
  insert(str) {  // 插入字符串
    if (!str) return ;
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      let index = str[i].charCodeAt() - 'a'.charCodeAt();  // 获得字符对应的索引
      if (!node.next[index]) {  // 如果索引对应没有值，就创建
        node.next[index] = new TrieNode();
      }
      node.path += 1;  // 该节点被经过一次
      node = node.next[index];  // 用下一层级保存下一个字符
    }
    node.end += 1;  // 最后的叶子节点保存 该路径对应的字符串 出现的次数
  }
  
  search(str) {  // 搜索字符串出现的次数
    if (!str) return;
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      let index = str[i].charCodeAt() - 'a'.charCodeAt();
      if (!node.next[index]) {  // 如果索引对应没有值，代表没有需要搜素的字符串
        return 0;
      }
      node = node.next[index];
    }
    return node.end;  // 该node为叶子节点，不包含字符，包含该路径对应的字符串出现的次数
  }
  
  delete(str) {  // 删除字符串
    if (!this.search(str)) return;
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      let index = str[i].charCodeAt() - 'a'.charCodeAt();
      if (--node.next[index].path == 0) {  // 如果索引对应的节点的 Path 为 0，代表没有经过该节点的字符串
        node.next[index] = null;
        return;
      }
      node = node.next[index];
    }
    node.end -= 1;
  }
}
             
// +---------------------------------------------------+
// |   +---------------+   +-----+   +-------+         |
// |   |   |   |   |   |   |path |   |end    |    root |
// |   +-----+---------+   +-----+   +-------+         |
// +---------|-----------------------------------------+
//           |
//           v
// +---------------------------------------------------+
// |   +---------------+   +-----+   +-------+         |
// |   |   |   |   |   |   |path |   |end    |         |
// |   +-----+---------+   +-----+   +-------+         |
// +---------|-----------------------------------------+
//           |
//           v
// +---------------------------------------------------+
// |   +---------------+   +-----+   +-------+         |
// |   |   |   |   |   |   |path |   |end    |         |
// |   +---------------+   +-----+   +-------+         |
// +---------------------------------------------------+


