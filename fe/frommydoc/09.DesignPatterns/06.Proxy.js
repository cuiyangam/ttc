// 为其他对象提供一种代理以控制对这个对象的访问

class Image{ display() { } }
class RealImage extends Image{ 
  constructor(filename){
    super();
    this.filename = filename;
    this.loadFromDisk(filename);
  }
  loadFromDisk(filename){ console.log (`Loading ${filename}`);}
  display(){ console.log (`Displaying ${this.filename}`);}
}
class ProxyImage extends Image {
  constructor(filename, realimage){
    super();
    this.filename = filename;
    this.realimage = realimage;
  }
  display(){
    if(this.realimage === undefined){
      this.realimage = new RealImage(this.filename);
    }
    this.realimage.display()
  }
}

let image = new ProxyImage("asd.png")
image.display();
image.display();
