// items 为私有变量
let Queue = (function() {
  const items = new WeakMap();

  class Queue {
    constructor() {
      items.set(this, []);
    }

    enqueue(element) {
      let q = items.get(this);
      if (element instanceof Array) items.set(this, q.concat(element));
      else q.push(element);
    }

    dequeue() {
      let q = items.get(this);
      return q.shift();
    }

    front() {
      return items.get(this)[0];
    }

    isEmpty() {
      return items.get(this).length === 0;
    }

    size() {
      return items.get(this).length;
    }

    clear() {
      items.set(this, []);
    }

    print() {
      console.log(items.get(this).toString());
    }
  }

  return Queue;
})();
