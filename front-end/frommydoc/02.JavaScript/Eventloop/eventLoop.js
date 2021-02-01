// http://www.ruanyifeng.com/blog/2014/10/event-loop.html
// 前端 浏览器eventLoop
// node部分 事件环


// 浏览器eventLoop js单线程的
// 进程里(进程是计算机分配任务和调度任务的基本单位)
// 进程里可以包含线程

// js中 他是主线程是单线程的  (setTimeout 异步)
// 同步和异步
// js和css 是共用同一个线程渲染的

// js里 有很多方法 可以实现异步 
// 队列 (先进先出) 栈 (先进后厨)
// 代码在栈中执行

// 函数的调用栈  (调用后的销毁)
// 先进的后出 作用域的销毁和创建
function one() {
  function two(params) {
    function three(params) {
      console.log('-------');
    }
    three();
  }
  two()
}
one();


setTimeout(() => {
    console.log(1);
}, 0);

setTimeout(() => {
  console.log(2);
}, 0);

// 异步的方法也会进行再度分类
// 宏任务(大setTimeout) 微任务(Promise.then)

setTimeout(() => {
  console.log('timeout1')
  Promise.resolve().then(data => {
    console.log(2);
  });
}, 0);
setTimeout(() => {
  console.log('timeout2');
}, 0);
Promise.resolve().then(data=>{
  console.log(1);
});

// 浏览器事件环的机制 会先清空微任务
// 取出一个宏任务执行,执行完后 如果有微任务 会再次清空微任务,之后再执行下一个宏任务

// vue.nextTick 怎么实现的 宏任务 微任务


// webworker 归主线程管理的 (不能操作dom )
// h5 api