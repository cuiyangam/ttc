import React from 'react';
import App from './usage1';
import App2 from './usage2';
import App3 from './usage3';

export default () => (
  <div>
    <div>
      Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。这会使得组件的复用性变差。
    </div><br/>
    <div>
      控制反转：将子组件放置在父组件以减少props传递
    </div><br/>
    <div>
      当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。<br/>
      Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，<br/>
      因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。
    </div><br/>
    <div>
      用法：
      1.用contextType消费，该方法只能订阅单一 contex<br/>
      2.用React.Consumer消费,函数式组件作为子元素<br/>
      3.消费多个 Context<br/>
      注意事项：Provider的value如果是引用类型，要避免不必要的渲染
    </div><br/>
    <span>用法1</span>
    <App/>
    <span>用法2</span>
    <App2/>
    <App3
      signedInUser={{name: 'cuiyang'}}
      theme={'dark'}
    />
  </div>
);
