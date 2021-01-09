import React from 'react';

export default () => (
  <div>
    <pre>
      1.使用 JSX 的原因：
        渲染逻辑(JS)本质上与其他 UI逻辑(HTML)内在耦合。比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI
    </pre>
    <pre>
      2.JSX 语法：
        在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式
        JSX 也是一个表达式
    </pre>
    <pre>
      3.JSX 特点：
        JSX 防止注入攻击
        JSX 表示对象，Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
        React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，因为 JSX 语法上更接近 JavaScript 而不是 HTML
    </pre>
  </div>
);
