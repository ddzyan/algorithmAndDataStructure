/**
 * 使用 闭包 与 代理模式
 * 实现参数赋值时的验证
 */

const account = {
  name: "",
  age: 12
};

const validators = {
  name: function(value) {
    return {
      validate: value.length < 12,
      error: "name 长度不能超过12,当前输入的为" + value
    };
  }
};

/**
 * 闭包函数
 * 使返回的函数依然可以获得父函数的作用域，并且这个作用域不受外界干扰
 */
const proxyValidator = function(target, validators) {
  return new Proxy(target, {
    _validators: validators,
    /**
     *
     * @param {object} target 目标对象
     * @param {string} prop 属性名称
     * @param {any} value 属性值
     */
    set: function(target, prop, value) {
      if (value === "") throw new Error("不能赋值为空");

      const validResult = this._validators[prop](value);
      if (!validResult.validate) {
        console.error(`${validResult.error}`);
        return (target[prop] = false);
      } else {
        return Reflect.set(target, prop, value);
      }
    },
    /**
     *
     * @param {object} targer 目标对象
     * @param {any} p 属性名称
     */
    get: function(targer, p) {
      if (p in target) {
        return targer[p];
      } else {
        throw new ReferenceError("属性不存在");
      }
    }
  });
};

const accountProxy = proxyValidator(account, validators);

accountProxy.name = "ruziniu".repeat(12);
accountProxy.name = "ruziniu";
console.log(accountProxy.name);
console.log(accountProxy.height);
