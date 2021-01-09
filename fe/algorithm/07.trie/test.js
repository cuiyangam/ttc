let Trie = require('./Trie');
let t = new Trie();
t.insert('led');
t.insert('let');
t.insert('lets');
t.insert('led');
console.log (t.search('led'));
