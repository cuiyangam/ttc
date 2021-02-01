// 版本1
// executor函数体不含异步操作

function Promise(executor) {
  let ctx = this;
  // 保存resolve/reject参数的值
  ctx.value = undefined;
  ctx.reason = undefined;

  ctx.status = 'pending';

  function resolve(value) {
    if (ctx.status === 'pending') {
      // console.log(this);  // global
      ctx.value = value;
      ctx.status = 'fulfilled';
    }
  }
  function reject(reason) {
    if (ctx.status === 'pending') {
      ctx.reason = reason;
      ctx.status = 'rejected';
    }
  }
  executor(resolve, reject);
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  let ctx = this;
  if (ctx.status === 'fulfilled') {
    onFulfilled(ctx.value);
  }
  if (ctx.status === 'rejected') {
    onRejected(ctx.reason);
  }
}
module.exports = Promise;