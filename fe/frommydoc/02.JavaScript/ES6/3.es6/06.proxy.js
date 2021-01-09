var a = {
  s: 111
}
var obj = new Proxy(a, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    let aa = target;
    let bb = receiver;
    return Reflect.set(target, key, value, receiver);
  }
});
obj.count = 1
//  setting count!
++obj.count