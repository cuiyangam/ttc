import React from 'react';
let a = true;
export default () => (
  <div>
    <div>
      原生HTML 标签用小写字母，自定义组件用大写开头的单词
    </div><br/>
    <div>
      true/false,undefined,null 不被渲染。这有助于依据特定条件来渲染其他的 React 元素。
    </div><br/>
    {
      a &&
      <div>我是0</div>
    }
  </div>
);
