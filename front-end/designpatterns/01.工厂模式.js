// 工厂模式（Factory Pattern）
// 定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行。
class Shape {
    draw() { }
}

class Square extends Shape {
    draw() { console.log('draw method called in Square'); }
}

class Circle extends Shape {
    draw() { console.log('draw method called in Circle'); }
}

class ShapeFactory {
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

const shapeFactory = new ShapeFactory();
const square = shapeFactory.getSharp('square');
const circle = shapeFactory.getSharp('circle');
square.draw();
circle.draw();
