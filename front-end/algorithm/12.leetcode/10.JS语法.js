  

Array slice splice shift unshift push pop
      sort(item 被转换为字符串之后的ascII比较)

const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
console.log(i);
}
// 2 3 5 4

const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 去除数组的重复成员
[...new Set(array)]

s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false

let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"

const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"

Map: set, delete clear, set, has get, size
Set: add, delete clear,    , has    , size