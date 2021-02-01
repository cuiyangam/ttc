// 提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类

class Shape { draw() { } }
class Square extends Shape {draw() {console.log("Square::draw()");}}
class Circle extends Shape {draw() {console.log("Circle::draw()");}}

class Color { fill() { } }
class Red extends Color {fill() {console.log("Red::fill()");}}
class Blue extends Color {fill() {console.log("Blue::fill()");}}

class AbstractFactory {
  getShape(){} 
  getColor(){}
}
class ShapeFactory extends AbstractFactory { 
  getShape(shapeType) { return shapeType === 'square' ? new Square() : new Circle();} 
  getColor(color){ return {}}
}
class ColorFactory extends AbstractFactory { 
  getShape(shapeType) {return {}}
  getColor(color){ return color === 'red' ? new Red() : new Blue();} 
}

class FactoryProducer {
  static getFactory(f) { return f === 'shape' ? new ShapeFactory() : new ColorFactory();}
}

let shapeFactory = FactoryProducer.getFactory('shape');
let square = shapeFactory.getShape("square");
square.draw();
let circle = shapeFactory.getShape("circle");
circle.draw();

let colorFactory = FactoryProducer.getFactory('color');
let red = colorFactory.getColor("red")
red.fill();
let blue = colorFactory.getColor("blue");
blue.fill();