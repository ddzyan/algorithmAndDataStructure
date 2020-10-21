/**
 * 分析
 * const map = new Map();
 * map.set(1,2);
 * map.set(2,2);
 * map.set(3,2);
 * for(let key of map.keys()){
 *   console.log(key);
 * }
 * 输出未 1,2,3
 * 
 * 我们直到 Map 底层采用的是 hash表 结构来实现，其中 hashKey 是由 key ---> hashCode(key) ---> hashKey 转换而来
 * 所以如果按照 hash 表位置遍历输出的话，输出的结果将不会是向上面这要按照输入顺序，有序输出才对，这里我们可以得出结论：
 * Map 底层还维护了一种结构来记录用户的输入顺序
 * 
 * 
 * map.set({name:'james'},{age:35,child:3});
 * 
 * map 的 key 可以传入一个对象，我们了解 对象 并不属于一个基础的数据类型，无法直接进行转换获得 hashKey，Map 底层的 hashCode 函数采用的是 c++ 实现
 * 传入的 key 为变量的内存地址指针，我们了解过指针也是整型二进制的数据，所以可以通过 hashCode 转换均匀的分布在 hash 表的 key 中
 * 
 */


// js 底层 Map 源码实现

const DEFAULT_CAPACITY = 6;

/**
 * @description 模拟 js 底层 c++ 源码实现 hashCode 函数
 * @param {string} key
 */
const hashCode = function (key) {
  // js 底层使用指针作为hashCode的参数来计算获得key,这里的代码仅仅是模拟，因为无法直接获得地址指针
  let index = 0;
  if (typeof key === 'string') {
    for (let i = 0; i < 10; i++) {
      if (!Number.isNaN(key.charCodeAt(i))) {
        index += key.charCodeAt(i);
      } else {
        break;
      }
    }

    index = index % DEFAULT_CAPACITY;
  } else if (typeof key === 'number') {
    index = Number.isNaN(key) ? 0 : key % DEFAULT_CAPACITY;
  } else if (typeof key === 'object') {
    index = 1;
  }

  return index;
};

class LinkNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null; // 指向下一个节点
    this.ne = null; // 记录 hash 碰撞后的节点
  }
}

class MyMap {
  constructor() {
    this.collection = new Array(DEFAULT_CAPACITY);

    for (let i = 0; i < DEFAULT_CAPACITY; i++) {
      this.collection[i] = Object.create(null);
      this.collection[i].ne = null; // 指向linkNode节点
      this.collection[i].next = null; // 指向下一个对象，用以记录插入顺序
    }

    this.size = 0; // map大小
    this.head = null; // 头指针总指向第一个
    this.tail = null; // 尾指针总指向最后一个
  }

  set(key, value) {
    let index = hashCode(key);
    let node = this.collection[index];
    // 遍历碰撞链表
    while (node.ne) {
      if (node.ne.key === key) {
        node.ne.value = value;
        return this;
      } else {
        node = node.ne;
      }
    }

    let newNode = new LinkNode(key, value);
    node.ne = newNode;

    if (!this.head) {
      this.head = node;
    } else {
      this.head.next = node;
    }

    if (!this.tail) {
      this.tail = newNode;
    }

    // 将末尾节点（也就是上一个node）的next指向最新节点
    this.tail.next = newNode;
    // 更新末尾节点为最新节点
    this.tail = newNode;

    this.size++;

    return this;
  }

  has(key) {
    const index = hashCode(key);
    let node = this.collection[index];
    while (node.ne) {
      if (node.ne.key === key) {
        return true;
      } else {
        node = node.ne;
      }
    }

    return false;
  }

  /**
   * @description 获取指定key 的 value值
   * @param {string} key
   * @returns {value} 返回值
   */
  get(key) {
    if (this.has(key)) {
      const index = hashCode(key);
      let node = this.collection[index];
      while (node.ne) {
        if (node.ne.key === key) {
          return node.ne.value;
        } else {
          node = node.ne;
        }
      }
    }
    return null;
  }

  /**
   * @description 遍历 Map 内所有元素
   * @param {function} cb 回调函数
   * @param {object} thisArgs 可选参数。当执行回调函数时用作 this 的值(参考对象)。
   * @returns {void}
   */
  forEach(cb, thisArgs) {
    let head = this.head;

    while (head) {
      if (head.ne) {
        const { key, value } = head.ne;
        cb.call(thisArgs, key, value);
        head = head.next;
      }
    }
  }
}

module.exports = MyMap;

const map = new MyMap();

map.set('apple', { name: 'james1' });
map.set('apple', { name: 'james2' }); // 由于 key 一致，所以 value 会被覆盖
map.set('banana', { name: 'james' });
map.forEach((key, value) => {
  console.log('key', key);
  console.log('value', value);
});

map.get('apple');

/* const map = new Map();
map.set('a', 'ab');
map.set('b', 'bc');

map.forEach(([key, value]) => {
  console.log('key', key);
  console.log('value', value);
}); */
