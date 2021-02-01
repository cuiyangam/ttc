// 用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true;
console.log (me);
console.log (person);
console.log (me.__proto__ === person);