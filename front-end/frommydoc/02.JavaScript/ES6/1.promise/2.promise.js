// 版本2
// executor函数体含有异步操作
// executor中如果throw Error,直接reject

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

Promise.prototype.then = function (onFulfilled, onRejected) {
  let ctx = this;
  if (ctx.status === 'fulfilled') {
    onFulfilled(ctx.value);
  }
  if (ctx.status === 'rejected') {
    onRejected(ctx.reason);
  }

  // executor函数体中有异步操作，此时调用then时 处于pending态 
  if (ctx.status === 'pending') {
    ctx.onFulfilledCallbacks.push(
      () => { onFulfilled(ctx.value); }
    );
    ctx.onRejectedCallbacks.push(
      () => { onRejected(ctx.reason); }
    );
  }
}
module.exports = Promise;