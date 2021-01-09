## ECMAScript6新特性速览
ES6(即ES2015)是最新版本的ECMAScript标准。
ES6是该语言的重大更新。
主流的JS引擎正在对这些新特性[提供支持][1]。

本文章参考如下：
[Babel官网 https://babeljs.io/learn-es2015/][3]
[阮一峰ES6教程 http://es6.ruanyifeng.com/][5]
[ES6不错的总结   http://es6-features.org/#Constants][4]
[ES6官网   http://www.ecma-international.org/ecma-262/6.0/][2]

#### 箭头函数（Arrows）
箭头函数是函数的简写，使用=>语法。
箭头函数可以写在语句块或者表达式内。
箭头函数内的this与其外部的this一致(arguments同)。（浏览编译后的ES5就可以发现其实是在外部将this存为_this,然后箭头函数内使用_this)

```javascript
// Expression bodies
var evens = [1,3,5,7,9];
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));// 如返回对象则必须使用()将对象包裹

// Statement bodies
var fives = [];
nums.forEach(v => {

  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
  
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

// Lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }
    return numbers;
  };
  return example();
}

square(2, 4, 7.5, 8, 11.5, 21); // returns: [4, 16, 56.25, 64, 132.25, 441]
```
#### 类（Classes）
ES6的类是基于原型继承语法的语法糖。
除了支持原型继承外，还支持super调用，实例，静态方法，构造器

```
// constructor,super,getter,setter,method
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    // this.color = color; // ReferenceError.该处编译失败是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。
    super(x, y);
    this.color = color; // 正确
  }
  update(camera) {
    //...
    super.update();  // setter: 123
  }
  get color() {
    return 'getter';  //getter
  }
  set color(value) {
    console.log('setter: '+value);
  }
}

// static method
class Foo {
    static classMethod() {
        return 'hello';
    }
}
Foo.classMethod() // 'hello'
var foo = new Foo();
// foo.classMethod(); // TypeError: foo.classMethod is not a function
```
#### 增强的对象字面量（Enhanced Object Literals） 
对象字面量新增支持：指定原型，简写属性赋值，定义方法，调用super，计算的属性名
```
var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
```
#### 模板字符串（Template Strings） 

模板字符串提供了构建字符串的语法糖，可在字符串模板内添加标记以定制生成不同的字符串。

```
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript this is
 not legal.`

// String interpolation
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```

粗体文本

####解构（Destructuring）
解构语法是一个Javascript表达式，可以将值从数组或对象提取到不同的变量中。
```
// list matching
var [a, ,b] = [1,2,3];
a === 1; 
b === 3;

// object matching
var { op: a, lhs: { op: b }, rhs: c }
       = getASTNode()
function getASTNode(){
  return {op: 1, lhs: 2, rhs: 3}
}
// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var {op, lhs, rhs} = getASTNode()

// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}
g({name: 5})

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;

// Destructuring + defaults arguments
function r({x, y, w = 10, h = 10}) {
  return x + y + w + h;
}
r({x:1, y:2}) === 23
```


[1]: http://kangax.github.io/compat-table/es6/
[2]: http://www.ecma-international.org/ecma-262/6.0/
[3]: https://babeljs.io/learn-es2015/
[4]: http://es6-features.org/#Constants
[5]: http://es6.ruanyifeng.com/

