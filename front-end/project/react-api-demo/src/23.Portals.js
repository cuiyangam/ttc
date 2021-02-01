import React from 'react';

export default () => (
  
  // React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中。
  // `domNode` 是一个可以在任何位置的有效 DOM 节点。
  // return ReactDOM.createPortal(
  //   this.props.children,
  //   domNode,
  // );
  <div>
    <div>
      createPortal只是在HTML DOM树上的改变，点击事件等逻辑仍然遵循React组件树
    </div><br/>
  </div>
);
