/**
 * 代理 getFib
 * 在执行前判断结果是否已经存在
 * 存在直接返回
 * 不存在则计算，并且保存在内存中
 */

const getCacheProxy = (fn, cache = new Map()) => {
  return new Proxy(fn, {
    apply(target, context, args) {
      const argsString = args.join(" ");
      if (cache.has(argsString)) {
        // 如果有缓存,直接返回缓存数据        console.log(`输出${args}的缓存结果: ${cache.get(argsString)}`);

        return cache.get(argsString);
      }
      const result = fn(...args);
      cache.set(argsString, result);

      return result;
    }
  });
};

const getFib = number => {
  if (number <= 2) {
    return 1;
  } else {
    return getFib(number - 1) + getFib(number - 2);
  }
};

const getFibProxy = getCacheProxy(getFib);
console.log("第一次运行结果", getFibProxy(40));
console.log("第二次运行结果", getFibProxy(40));
