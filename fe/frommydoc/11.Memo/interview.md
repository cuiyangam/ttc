算法
1.任意一种数组排序,冒泡，归并，快速等
```javascript
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```
2.深拷贝的实现
```javascript
  function deepClone(obj) { // 递归拷贝 深拷贝
    if(obj == null) return null;
    if (obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    if(typeof obj !== 'object') return obj;
    let t = new obj.constructor
    for(let key in obj ){
      t[key] = deepClone(obj[key])
    }
    return t;
  }
  let o = { a: [1, 2, 3] }
  let r = deepClone(o);
  o.a[1] = 1000
  console.log(r);
```
3.设计模式，单例，发布订阅
```javascript
var Singleton = function(name) {
    this.name = name;
    this.instance = null;
};
Singleton.prototype.getName = function() {
    alert(this.name);
};
Singleton.getInstance = function(name) {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
};
var a = Singleton.getInstance('seven1');
var b = Singleton.getInstance('seven2');
/////
function Observer() {
    this.fns = [];
}
Observer.prototype = {
    subscribe: function (fn) {
        this.fns.push(fn);
    },
    unsubscribe: function (fn) {
        this.fns = this.fns.filter(
            function (el) {
                if (el !== fn) {
                    return el;
                }
            }
        );
    },
    update: function (o, thisObj) {
        var scope = thisObj || window;
        this.fns.forEach(
            function (el) {
                el.call(scope, o);
            }
        );
    }
};

//测试
var o = new Observer;
var f1 = function (data) {
    console.log('Robbin: ' + data + ', 赶紧干活了！');
};

var f2 = function (data) {
    console.log('Randall: ' + data + ', 找他加点工资去！');
};

o.subscribe(f1);
o.subscribe(f2);

o.update("Tom回来了！")

//退订f1
o.unsubscribe(f1);
//再来验证
o.update("Tom回来了！");   
```
2.ES5/ES6
Object.keys()返回对象中可枚举的自有属性的名称。数组
Object.getOwnPropertyNames()返回对象中所有自有属性的名称。数组
Object.create(prototype, {})
Object.defineProperty()
Object.defineProperties()
也可以认为一个属性包含一个属性名称与四个属性特性
    对于数据属性：  value writable enumerable configurable
    对于存取器属性：get  set     enumerable configurable

闭包， 原型链， 作用域， 类型转换， 类， 任务队列（宏任务，微任务）
promise， generator, async/await
Object.assign()


伪类伪元素
.boring-text::after {
   content:    "<- 无聊!";
   color:      red;
}
三栏布局：https://segmentfault.com/a/1190000008705541
高度的定的元素居中：
```css
.outer{
    display:table-cell;
    text-align:center;
    vertical-align:middle;
}
.inner{
    display:inline-block;
}
```
```css
display: flex;
justify-content: center;
align-items: center;
```
```css
.outer{
    display:relative;
}
.inner{
    transform: translate(-50%,-50%);
    position: absolute;
    top: 50%;
    left: 50%;
}
```

4.框架
computed 与 watch
组件间通信方式
vue-router
    导航：<router-link> 与 router.push({ name: 'user', params: { userId: 123 }})
    在导航完成前获取数据：beforeRouteEnter ，一定要调用next方法来 resolve 这个钩子
vuex
    通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store
    通过mutations(仅同步)来修改state,store.commit('increment', 10)    
    actions(可异步)， store.dispatch('increment')

5.项目经验