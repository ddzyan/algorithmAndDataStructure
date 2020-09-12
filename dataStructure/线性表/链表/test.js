const LinkList = require('./LinkList');

const linkList = new LinkList();

linkList.append('node1');
linkList.append('node2');
linkList.append('node3');
linkList.append('node4');
linkList.append('node5');
linkList.insert(2, 'node6');
console.log('size()', linkList.size());
linkList.display();
console.log('getElemOfIndex(1)', linkList.getValOfIndex(1));

console.log('getIndexOfElem(node1)', linkList.findNode('node2'));

linkList.delete(1);
linkList.delete(2);
linkList.delete(3);
linkList.display();
console.log('size()', linkList.size());

linkList.clear();
console.log('clear()', linkList.display());

console.log('getIndexOfElem(node2)', linkList.findNode('node2'));
