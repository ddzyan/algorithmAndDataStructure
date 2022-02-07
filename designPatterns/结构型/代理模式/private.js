/**
 * 使用代理模式实现类的私有属性
 *
 * 私有属性命名以 _开头
 */

const account = {
  name: "ruziniu",
  _age: 21
};

const accountProxy = new Proxy(account, {
  get: function(target, p) {
    if (propsFilter(p)) {
      const value = Reflect.get(target, p);
      console.log("Reflect get value", Reflect.get(target, p));
      console.log("account get value", target[p]);
      // 如果返回的使方法，需要将this指向代理对象
      if (typeof value === "function") {
        value.bind(account);
      }
      return value;
    } else {
      //throw new ReferenceError(`${p} 属性不存在`);
      console.log(`获取失败:${p} 属性不存在`);
    }
  },
  set: function(target, p, value) {
    if (propsFilter(p)) {
      return Reflect.set(target, p, value);
    } else {
      //throw new ReferenceError(`${p} 属性不存在`);
      console.log(`设置失败:${p} 属性不存在`);
    }
  },
  // 拦截propKey in proxy的操作
  has: function(target, p) {
    if (propsFilter(p)) {
      return true;
    } else {
      return false;
    }
  }
});

/**
 * 判断属性是否包含 _
 * @param {string} props
 */
const propsFilter = function(props) {
  return props.indexOf("_") === -1;
};

console.log("accountProxy._age :", accountProxy._age);
console.log("accountProxy.name :", accountProxy.name);
accountProxy["_age"] = 12;
accountProxy["name"] = "james";
console.log("name" in accountProxy);
console.log("_age" in accountProxy);
console.log("accountProxy :", account);
