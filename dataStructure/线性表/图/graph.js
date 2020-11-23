// 无向图的源码实现
class Graph {
  constructor(v) {
    this.v = v; // 顶点的个数
    this.list = [];
    for (let i = 0; i < v; i++) {
      this.list[i] = [];
    }
  }

  addEdge(s, t) {
    this.list[s][t] = true;
    this.list[t][s] = true;
  }
}

const graph = new Graph(10);
graph.addEdge(1, 2);
