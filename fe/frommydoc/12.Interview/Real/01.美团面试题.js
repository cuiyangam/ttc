// 美团一面 10道题

// 1. getData放在constructor 与 componentDidMount 区别
// constructor 仅执行一次，而后者可能多次挂载卸载

// 2.知识点同上

// 3. localStorage 存取数据不一致，原因？
// 最大存储5M，大于5M 可以用indexDB

// 4. setCookie, getCookie 函数实现
// 对document.cookie的赋值，相当于 += 到字符串的头部
// "_ga=GA1.2.1821698461.1568389338; dwf_sg_task_completion=False; _gid=GA1.2.1841942369.1587024494"
function setCookie(name, value) {
  document.cookie = name + '=' + value;
}

function getCookie(name){
  let result = [],
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    // /(^| )name=([^;]*)(;|$)/
    if(result = document.cookie.match(reg)) {
      return result[2];
    } else {
      return null;
    }
}
//删除cookies
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
setCookie("name","hayden");
alert(getCookie("name"));

// 5. JSON.stringify 拿到去除循环引用后的结果
function decycle (target) {
  var map = new WeakMap()
  function _cycle (obj) {
    if (!map.has(obj)) {
      map.set(obj, obj)
    }
    let keys = Object.keys(obj)
    for (let i = 0, len = keys.length; i < len; i++) {
      if (typeof obj[keys[i]] === 'object') {
        if (map.has(obj[keys[i]])) {
          delete obj[keys[i]];
          continue
        } else {
          map.set(obj[keys[i]], obj[keys[i]])
        }
        _cycle(obj[keys[i]])
      }
    }
  }
  _cycle(target)
}

let m = {name: 'm'};
let n = {name: 'n'};
m.child = n;
n.child = m;

decycle(m)
JSON.stringify(m)

// 6. 对 document.querySelector 记录调用次数与参数
// 有报错，解决方案见 https://stackoverflow.com/questions/37130046/how-to-decorate-queryselector-queryselectorall-in-js
let originalSelector = document.querySelector;
function recordQuerySelector() {
    let times = 0;
    let params = [];
    return function() {
        times++;console.log(times);
        params.push(arguments);
        return originalSelector( arguments)
    }
}

document.querySelector = recordQuerySelector()
console.log(document.querySelector('outer'));

// 7. 事件代理，如何确定点的li是第几个
// 用event.target.parentNode迭代找到li,然后拿到所有li，取indexOf

// 8.
// a 表示透明度：0=透明；1=不透明；

// 9. 节流 防抖

// 10. 后端如何识别CORS
// Access-Control-Allow-Origin