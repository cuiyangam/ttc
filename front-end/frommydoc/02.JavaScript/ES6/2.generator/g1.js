// 1.整体理解
// Generator 函数返回的是遍历器对象
// 该对象可依次迭代出指针，该指针就是yield所在位置抽取出的内存地址(函数执行地址)
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next()  // { value: 'hello', done: false }
hw.next()  // { value: 'world', done: false }
hw.next()  // { value: 'ending', done: true }
hw.next()  // { value: undefined, done: true }

// 2.使用准则
// 第n个 next() 方法的返回对象的value 就是第 n 个yield 后面的值
// 第n个 next() 方法的参数作为第 n-1 个yield 整体返回的值
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }