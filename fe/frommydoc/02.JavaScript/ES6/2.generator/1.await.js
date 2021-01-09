// 1.async/await基本认识
// async 是 Generator 函数的语法糖(内置执行器的Generator)
// await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中

// 1.1 await命令后面，可以是 Promise 对象和原始类型的值
// 1.2 async函数的返回值是 Promise 对象
// 1.3 除非遇到return语句或者抛出错误,否则只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
// 1.4 await命令后面的 Promise 对象如果变为reject状态，则后续的await不会执行，reject的参数会被catch方法的回调函数接收到。

async function f() {
  return 'hello world';
}
f().then(v => console.log(v))
// "hello world"

async function f() {
  throw new Error('出错了');
}
f().then(
  v => console.log(v),
  e => console.log(e)
)
// Error: 出错了

async function f() {
  await Promise.reject('出错了');
}
f()
  .then(v => console.log("ooh", v))
  .catch(e => console.log("opps", e))
// opps 出错了

// await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中
async function f() {
  try {
    await new Promise(function (resolve, reject) {
      throw new Error('出错了');
    });
  } catch (e) {

  }
  return await ('hello world');
}
f()
  .then(v => console.log("ooh", v))
  .catch(e => console.log("opps", e))
// ooh hello world