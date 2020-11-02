// 实现hash表基础功能

/**
 *
 * @param {string} str
 */
const hashCode = function (str) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i); // 返回指定位置的字符的Unicode值。
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // 转换为32为整数
  }
  return hash;
};

hashCode('12');

class HashTable {
  constructor() {
    this.hashTable =  [];
  }

  add(key ,value){
    // 为解决地址冲突
    const hashKey = hashCode(key);

    this.hashTable[hashKey] = value;
  }


  del(){}

  update()

  get(){}
}
