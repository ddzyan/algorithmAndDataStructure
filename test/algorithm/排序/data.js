module.exports = function (number, max) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    const a = Math.ceil(Math.random() * max);
    arr.push(a);
  }

  return arr;
};
