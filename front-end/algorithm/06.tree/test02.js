let AVL = require('./02.AVL');
let a = new AVL();

a.addNode(7);
a.addNode(6);
a.addNode(5);
a.addNode(4);
a.addNode(3);
a.addNode(2);
a.addNode(1);
a.midTravel();
console.log (a._getHeight(a.root));