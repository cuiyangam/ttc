// 抽象工厂模式（Abstract Factory Pattern）
// 在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。
class Shape {
    draw() { }
}

class Square extends Shape {
    draw() { console.log('draw method called in Square'); }
}

class Circle extends Shape {
    draw() { console.log('draw method called in Circle'); }
}
// ===============
class Color {
    fill() {}
}

class Red extends Color{
    fill() { console.log('red color filled'); }
}

class Blue extends Color{
    fill() { console.log('blue color filled'); }
}
// ===============
class AbstractFactory {
    getSharp() {}
    getColor() {}
}

class ShapeFactory extends AbstractFactory{
    getSharp(shape) {
        if (shape === null) {
            return null;
        } else if (shape === 'square') {
            return new Square();
        } else if (shape === 'circle') {
            return new Circle();
        }
        return null;
    }
}

class ColorFactory extends AbstractFactory{
    getColor(color) {
        if (color === null) {
            return null;
        } else if (color === 'red') {
            return new Red();
        } else if (color === 'blue') {
            return new Blue();
        }
        return null;
    }
}
// ===============
class FactoryProducer {
    static getFactory(choice) {
        return choice === 'shape'
            ? new ShapeFactory()
            : new ColorFactory();
    }
}

const shapeFactory = FactoryProducer.getFactory('shape');
const square = shapeFactory.getSharp('square');
square.draw();
const circle = shapeFactory.getSharp('circle');
circle.draw();

const colorFactory = FactoryProducer.getFactory('color');
const red = colorFactory.getColor('red');
red.fill();
const blue = colorFactory.getColor('blue');
blue.fill();
