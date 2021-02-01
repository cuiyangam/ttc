// 定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新

class Observer {
  constructor() {
    this.messages = {};
  }
  regist(type, fn) {
    if (this.messages[type] === undefined) {
      this.messages[type] = [fn];
    } else {
      this.messages[type].push(fn);
    }
  }
  fire(type, args) {
    if (this.messages[type] === undefined) {
      return;
    }
    this.messages[type].forEach(item => item.call(this, args));
  }
  remove(type, fn) {
    if (this.messages[type] === undefined) {
      return;
    }
    this.messages[type].some((item, index) => { 
      if(item === fn){
        this.messages[type].splice(index, 1);
        return true;
      }
    });
  }
}

let fn = function(m){console.log (m + "ok okok");}
let fn2 = function(m){console.log (m + "ok okok2");}

let o = new Observer();
o.regist('ok', fn)
o.regist('ok2', fn2)

o.fire('ok', "xiaoxi")
o.fire('ok2', "xiaoxi2")

o.remove('ok',fn)
o.fire('ok', "xiaoxi")
o.fire('ok2', "xiaoxi2")
