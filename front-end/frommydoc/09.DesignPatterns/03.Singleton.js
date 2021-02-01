// 意图：保证一个类仅有一个实例，并提供一个访问它的全局访问点

class Singleton {
  constructor() {this.num = Math.random();}
  log(){return this.num;}
  static getInstance() {
    if (this.instance == null) {this.instance = new Singleton();}
    return this.instance;
  }
}
console.log(Singleton.getInstance().log() === Singleton.getInstance().log());
console.log(Singleton.getInstance() === Singleton.getInstance());



