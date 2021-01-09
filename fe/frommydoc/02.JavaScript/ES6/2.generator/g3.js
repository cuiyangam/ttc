// 5. iterator.throw，该throw被捕获
// iterator.throw()方法相当于iterator.next(throw new Error)
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};
var i = g();
i.next();
try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b

// 6. iterator.throw, 该throw未被捕获
// Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了
// 注意第三次
function* g() {
  yield 1;
  console.log('throwing an exception');
  throw new Error('generator broke!');
  yield 2;
  yield 3;
}
function log(generator) {
  var v;
  console.log('starting generator');
  try {
    v = generator.next();
    console.log('第一次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  try {
    v = generator.next();
    console.log('第二次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  try {
    v = generator.next();
    console.log('第三次运行next方法', v);
  } catch (err) {
    console.log('捕捉错误', v);
  }
  console.log('caller done');
}
log(g());
// starting generator
// 第一次运行next方法 { value: 1, done: false }
// throwing an exception
// 捕捉错误 { value: 1, done: false }
// 第三次运行next方法 { value: undefined, done: true }
// caller done

// 7.iterator.return 
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
var g = gen();
g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }

// next()是将yield表达式替换成一个值。
// throw()是将yield表达式替换成一个throw语句。
// return()是将yield表达式替换成一个return语句。

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
var g = gen();
let a = g.next()        
let b = g.throw('foo')  // 抛出错误，在此暂停执行
let c = g.next() ;      
console.log(a,b,c);