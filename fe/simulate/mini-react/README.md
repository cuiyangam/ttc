# 简版react

## 1.虚拟DOM与render函数

JSX 被 babel编译为React.createElement(),所以需要React  
React.createElement()执行后返回一个对象，即虚拟DOM,该对象包含dom片段的完整描述

```jsx
<div>
  Hello {this.props.name}
</div>
```
babel 编译后：
```js
React.createElement(
  "div",
  null,
  "Hello ",
  this.props.name
);
```

## 2.更完善的render函数与部分生命周期函数

componentWillReceiveProps    
componentWillMount  
componentDidMount  
componentWillUpdate   
componentDidUpdate  


## 3.diff算法

将虚拟dom与真实dom直接比较，如有差异立即更新到真实dom  
另一种diff算法：比较两个虚拟dom，得到差异patch, 然后将patch 渲染到真实节点


## 4.异步的setState

首先，将一个个的setState存储下来  
然后，利用js异步特性，如宏任务或者微任务中真正将修改渲染至真实dom


