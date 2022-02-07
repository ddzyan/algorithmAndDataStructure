/**
 * 委托模式也被称为代理模式
 *
 * 对 proxy  对象的 get 和 set 方法进行了代理，也可以称为拦截
 */

const a = {};

const proxy = new Proxy(a, {
  /**
   * 拦截取值方法
   * @param {object} target 代理的对象，也就是a
   * @param {string} key 属性值
   * @param {object} receiver 代理实例，也就是 proxy
   */
  get: function(target, key, receiver) {
    //console.log(`getting ${key}!`);
    //return Reflect.get(target, key, receiver);
    return receiver;
  },
  set: function(target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});
//proxy.count = 1;
//setting count!
//++proxy.count;
// getting count!
// setting count!

console.log(proxy.a === proxy);
console.log(proxy.a === a);
