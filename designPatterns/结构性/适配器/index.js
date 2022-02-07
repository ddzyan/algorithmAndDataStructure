/**
 * 适配器模式
 *
 * 现在存在一个旧方法，已经被其他非常多的地方使用
 * 但是现在有需求，对旧方法进行修改，包装传入的参数必须是 number 类型
 * 为了保证不需要再修改旧方法内的内容(这里暂时认为旧方法内的代码逻辑非常复杂)
 * 需要引入适配器模式
 */
const oldFun = function(number) {
  console.log("oldFun param :", number + 1);
};

const newIntFun = function(number) {
  number = Number.parseInt(number);
  oldFun(number);
};

oldFun("1");
/**
 * 针对新需求，已经对旧方法进行了适配，并且未对旧方法进行重构，减少了开发量
 * 当新方法修改的代码非常多，则需要考虑重构代码
 */
newIntFun("1");
