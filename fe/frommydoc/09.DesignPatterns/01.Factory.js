// 意图：定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行

class Shape { draw() { } }
class Square extends Shape {draw() {console.log("Square::draw()");}}
class Circle extends Shape {draw() {console.log("Circle::draw()");}}
class ShapeFactory { getShape(shapeType) { return shapeType === 'square' ? new Square() : new Circle();} }

let shapeFactory = new ShapeFactory();
let square = shapeFactory.getShape("square");
square.draw();
let circle = shapeFactory.getShape("circle");
circle.draw();