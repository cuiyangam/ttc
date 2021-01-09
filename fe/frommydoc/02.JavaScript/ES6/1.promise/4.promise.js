// 版本4
// executor函数体含有异步操作
// executor中如果throw Error,直接reject
// resolvePromise 防止返回一个被执行过的promise
// 实现链式调用,解决返回非promise 与 单层promise 的情况

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

function resolvePromise(promise2, x, resolve, reject) {
  // 如果x是一个promise，本函数会执行x, 因此x中的状态是被修改过的
  // 遵循then返回一个新promise的原则,所以x与promise不可以相等
  if (promise2 === x) {
    // es6的promise也是抛一个TypeError
    throw (new TypeError("循环引用"));
  }
  // 本实现没有判断官方文档中2.3.2.If x is a promise，仅当x是一个类promise
  if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
    // 防止取值失败
    try {
      let then = x.then;
      if (typeof then === 'function') {  // 类promise
        then.call(
          x,
          (y) => { resolve(y); },
          (r) => { reject(r); }
        );
      } else {  // {then: 123}
        resolve(x);
      }
    } catch (error) {
      reject(error);
    }
  } else {
    // 非promise就resolve
    resolve(x);
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  let ctx = this;

  let promise2 = new Promise(
    (resolve, reject) => {
      // 拿到resolve/reject的返回结果，如果非promise,则执行下一个then的resolve回调
      // 如果是promise，则用该promise的状态替换当前的promise
      // onFulfilled or onRejected must not be called until the execution context stack contains only platform code. [3.1].
      // 鉴于上述规范，都加setTimeout,0,这样可以实现链式引用检测等多种功能
      if (ctx.status === 'fulfilled') {
        setTimeout(
          () => {
            try {
              let x = onFulfilled(ctx.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          },
          0
        );
      }
      if (ctx.status === 'rejected') {
        setTimeout(
          () => {
            try {
              let x = onRejected(ctx.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          },
          0
        );
      }

      // executor函数体中有异步操作，此时调用then时 处于pending态 
      if (ctx.status === 'pending') {
        ctx.onFulfilledCallbacks.push(
          () => {
            setTimeout(
              () => {
                try {
                  let x = onFulfilled(ctx.value);
                  resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                  reject(error);
                }
              },
              0
            );
          }
        );
        ctx.onRejectedCallbacks.push(
          () => {
            setTimeout(
              () => {
                try {
                  let x = onRejected(ctx.reason);
                  resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                  reject(error);
                }
              },
              0
            );
          }
        );
      }
    }
  );

  return promise2;
}
module.exports = Promise;