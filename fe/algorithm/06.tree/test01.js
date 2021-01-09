let  BST = require('./01.BST');
let b = new BST();
b.addNode(5);
b.addNode(3);
b.addNode(1);
b.addNode(4);

b.backTravel();
console.log (b.floor(4.1));
console.log ('.....');
b.delete(4);
b.midTravel();