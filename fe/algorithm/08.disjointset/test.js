let DisjointSet = require('./DisjointSet');

let uf = new DisjointSet(9);

uf.union(1,2);
uf.union(3,4);
uf.union(0,9);
uf.union(4,7);
uf.union(6,5);
uf.union(5,8);
uf.union(3,9);
uf.union(1,8);
console.log (uf.isConnected(1,4));
console.log (uf.isConnected(1,6));
