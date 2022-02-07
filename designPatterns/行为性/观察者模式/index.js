class PubSub {
  constructor() {
    this.handles = Object.create(null);
  }

  on(type, callback) {
    if (!callback && typeof callback !== "function")
      throw new Error("回调函数类型错误");
    if (!this.handles[type] && !Array.isArray(this.handles[type])) {
      this.handles[type] = [];
    }
    this.handles[type].push(callback);
  }

  emit(type, message) {
    if (this.handles[type] && Array.isArray(this.handles[type])) {
      this.handles[type].forEach(cb => {
        cb(message);
      });
    }
  }

  off(type, callback) {
    if (!callback && typeof callback !== "function")
      throw new Error("回调函数类型错误");

    if (this.handles[type] && Array.isArray(this.handles[type])) {
      this.handles[type].forEach((cb, index) => {
        if (cb === callback) {
          this.handles[type].splice(index, index + 1);
        }
      });
    }
  }
}

const a = new PubSub();

function cb(result) {
  console.log("start :", result);
}

a.on("start", cb);

a.off("start", cb);

a.emit("start", "周杰伦");
