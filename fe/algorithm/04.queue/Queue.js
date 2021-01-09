module.exports = class Queue{
  constructor(){
    this.queue = [];
  }
  enQueue(item) {
    this.queue.push(item);
  }
  deQueue(){
    this.queue.shift();
  }
  getHeader(){
    return this.queue[0];
  }
  getLength(){
    return this.queue.length;
  }
  isEmpty(){
    return this.queue.length === 0;
  }
}

// 基于数组实现的队列出队的时间复杂度是 O(n)
// 所以可采用复杂度为O(1)的循环队列
class SqQueue {
  constructor(length) {
    this.queue = new Array(length + 1);
    this.first = 0;  // 队头
    this.last = 0;  // 队尾
    this.size = 0;  // 当前队列大小
  }
  enQueue(item) {
    // 判断队尾 + 1 是否为队头
    // 如果是就代表需要扩容数组
    // % this.queue.length 是为了防止数组越界
    if (this.first === (this.last + 1) % this.queue.length) {
      this.resize(this.getLength() * 2 + 1)
    }
    this.queue[this.last] = item
    this.size++
    this.last = (this.last + 1) % this.queue.length
  }
  deQueue() {
    if (this.isEmpty()) {
      throw Error('Queue is empty')
    }
    let r = this.queue[this.first]
    this.queue[this.first] = null
    this.first = (this.first + 1) % this.queue.length
    this.size--
    // 判断当前队列大小是否过小
    // 为了保证不浪费空间，在队列空间等于总长度四分之一时
    // 且不为 2 时缩小总长度为当前的一半
    if (this.size === this.getLength() / 4 && this.getLength() / 2 !== 0) {
      this.resize(this.getLength() / 2)
    }
    return r
  }
  getHeader() {
    if (this.isEmpty()) {
      throw Error('Queue is empty')
    }
    return this.queue[this.first]
  }
  getLength() {
    return this.queue.length - 1
  }
  isEmpty() {
    return this.first === this.last
  }
  resize(length) {
    let q = new Array(length).fill(null)
    for (let i = 0; i < this.size; i++) {
      q[i] = this.queue[(i + this.first) % this.queue.length]
    }
    this.queue = q
    this.first = 0
    this.last = this.size
  }
  print(){
    let str = '';
    for(let i = 0; i < this.size; i++){
      str += this.queue[(this.first + i) % this.size] + ' ';
    }
    console.log (str);
  }
}
let q = new SqQueue(5);
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(4);
q.enQueue(5);
q.enQueue(6);
q.enQueue(7);

q.print()
console.log (q.queue);

