// 适用数组实现二叉树,此二叉树并不满足二叉查找树，左子节点的数据小于节点，右子节点的数据大于节点

class BinaryTree {
  constructor(data) {
    this.list = [data];
    this.size = 1;
  }

  add(data) {
    if (this.size & 1) {
      // 左
      this.list[2 * this.size] = data;
    } else {
      // 右
      this.list[2 * this.size + 1] = data;
    }

    this.size += 1;
  }

  traverse() {
    for (let i = 1; i < this.size; i++) {
      console.log(i, this.list[i]);
    }
  }
}

const binaryTree = new BinaryTree(1);

binaryTree.add(2);
binaryTree.add(3);
binaryTree.add(4);
binaryTree.add(5);
binaryTree.add(6);
binaryTree.add(7);

binaryTree.traverse();
