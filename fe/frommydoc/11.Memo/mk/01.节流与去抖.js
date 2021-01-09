// debounce 去抖; throttle 节流

/**
 * 防抖函数 debounce，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout, result;
  var debounced = function () {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) result = func.apply(context, args)
    }
    else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
    return result;
  };
  return debounced;
}

/**
 * 节流函数
 * @param {*} func 
 * @param {*} wait 
 * @param {*} options 
 */
  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options = {}) {
  let previous = 0;
  let result = null;
  let timer = null;
  return function () {
    let remain = wait - (Date.now() - previous);
    if (remain < 0 || remain > wait) {
      if (options.leading || !options.leading && previous) {
        result = func.apply(this, arguments);
      }
      previous = Date.now();
    } else {
      if (options.trailing) {
        result = null;
        clearTimeout(timer);
        timer = setTimeout(() => {
          result = func.apply(this, arguments);
          previous = Date.now();
        }, remain);
      }
    }
    return result;
  };
}

function calculateLayout() {
  console.log("okok");
  console.log(Date.now());
}
var lazyLayout = throttle(calculateLayout, 1000, { trailing: true, leading: true });
window.addEventListener('scroll', lazyLayout);

// 22.准确的倒计时怎么做

var firstTime = new Date().getTime()
var endTime = new Date("2016/05/20,20:20:20").getTime()
function showtime() {
  var now = new Date().getTime();
  var leftTime = endTime - now;
  var remainTime = 1000 - (now - firstTime);
  firstTime += 1000;

  console.log(new Date().getTime());
  setTimeout(showtime, remainTime);
}
// showtime();
