class App {
  constructor() {
    // 如果已存在对应的实例
    if (typeof App.instance === "object") {
      return App.instance;
    }

    // 缓存
    App.instance = this;
    return this;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return `这是${this._name}`;
  }
}

const app1 = new App();
const app2 = new App();

console.log(app1 === app2);
