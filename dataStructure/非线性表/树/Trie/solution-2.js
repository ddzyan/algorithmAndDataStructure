class Trie {
  constructor() {
    this.root = Object.create(null);
    this.size = 0;
  }

  insert(word) {
    let node = this.root;
    for (const chart of word) {
      if (!node[chart]) {
        node[chart] = Object.create(null);
      }
      node = node[chart];
    }
    this.size++;
    node.isWord = true;
  }

  _traverse(word) {
    let node = this.root;
    for (const chart of word) {
      if (!node[chart]) {
        return null;
      }

      node = node[chart];
    }

    return node;
  }

  search(word) {
    const node = this._traverse(word);
    return !!node && !!node.isWord;
  }

  startsWith(prefix) {
    return !!this._traverse(prefix);
  }
}

module.exports = Trie;
