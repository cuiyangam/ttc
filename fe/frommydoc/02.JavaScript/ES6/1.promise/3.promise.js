// 版本3
// executor函数体含有异步操作
// executor中如果throw Error,直接reject
// resolvePromise 防止返回一个被执行过的promise

function Promise(executor) {
  let ctx = this;

  // 保存resolve/reject参数的值
  ctx.value = undefined;
  ctx.reason = undefined;

  ctx.status = 'pending';

  // 保存resolve/reject后的回调
  ctx.onFulfilledCallbacks = [];
  ctx.onRejectedCallbacks = [];

  function resolve(value) {
    if (ctx.status === 'pending') {
      // console.log(this);  // global
      ctx.value = value;
      ctx.status = 'fulfilled';
      ctx.onFulfilledCallbacks.forEach(
        (fn) => { fn(); }
      );
    }
  }
  function reject(reason) {
    if (ctx.status === 'pending') {
      ctx.reason = reason;
      ctx.status = 'rejected';
      ctx.onRejectedCallbacks.forEach(
        (fn) => { fn(); }
      )
    }
  }
  // 执行executor失败，直接reject
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

function resolvePromise(promise2, x, resolve, reject){
  // 如果x是一个promise，本函数会执行x, 因此x中的状态是被修改过的
  // 遵循then返回一个新promise的原则,所以x与promise不可以相等
  if(promise2 === x){
    // es6的promise也是抛一个TypeError
    throw(new TypeError("循环引用"));
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  let ctx = this;

  let promise2 = new Promise(
    (resolve, reject) => {
      // 拿到resolve/reject的返回结果，如果非promise,则执行下一个then的resolve回调
      // 如果是promise，则用该promise的状态替换当前的promise
      if (ctx.status === 'fulfilled') {
        let x = onFulfilled(ctx.value);
        resolvePromise(promise2, x, resolve, reject);
      }
      if (ctx.status === 'rejected') {
        let x = onRejected(ctx.reason);
        resolvePromise(promise2, x, resolve, reject);
      }

      // executor函数体中有异步操作，此时调用then时 处于pending态 
      if (ctx.status === 'pending') {
        ctx.onFulfilledCallbacks.push(
          () => {
            let x = onFulfilled(ctx.value);
            resolvePromise(promise2, x, resolve, reject);
          }
        );
        ctx.onRejectedCallbacks.push(
          () => {
            let x = onRejected(ctx.reason);
            resolvePromise(promise2, x, resolve, reject);
          }
        );
      }
    }
  );

  return promise2;
}
module.exports = Promise;