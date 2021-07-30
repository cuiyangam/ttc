// 单例模式（Singleton Pattern）
// 保证一个类仅有一个实例，并提供一个访问它的全局访问点。
class Singleton {
    static instance = new Singleton();
    genTime = new Date();
    static getInstance() {
        return this.instance;
    }
    showMessage() {
        console.log('hello' + this.genTime);
    }
}

const instance = Singleton.getInstance();
instance.showMessage();
setTimeout(() => {
    instance.showMessage();
}, 1000)
