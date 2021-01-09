import React from 'react';

export default () => (
  <div>
    <div>
      通过 React 构建一个可搜索的产品数据表格来更深刻地领会 React 哲学      
    </div><br/>
    <div>
      1.将设计好的 UI 划分为组件层级：根据单一功能原则来判定组件的范围，一个组件原则上只能负责一个功能
    </div><br/>
    <div>
      2.用 React 创建一个静态版本：最好将渲染 UI 和添加交互这两个过程分开
    </div><br/>
    <div>
      3.确定 UI state 的最小（且完整）表示：判定使用state->不可使用props && 可变 && 不可否计算
    </div><br/>
    <div>
      4.确定 state 放置的位置：放在使用这个state的组件的父组件
    </div><br/>
    <div>
      5.添加反向数据流：处于较低层级的组件更新 较高层级组件中的 state。
    </div><br/>
  </div>
);
