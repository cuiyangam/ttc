import React from 'react';
import { render } from 'react-dom';
import c01 from './01.Hello World';     
import c02 from './02.JSX 简介';
import c03 from './03.元素渲染';
import c04 from './04.组件 & Props';
import c05 from './05.State & 生命周期';
import c06 from './06.事件处理';
import c07 from './07.条件渲染';
import c08 from './08.列表 & Key';
import c09 from './09.表单';
import c10 from './10.状态提升';
import c11 from './11.组合 vs 继承';
import c12 from './12.React 哲学';
import c13 from './13.无障碍';
import c14 from './14.代码分割/index.js';
import c15 from './15.Context/index.js';
import c16 from './16.错误边界';
import c17 from './17.Refs 转发/index.js';
import c18 from './18.Fragments';
import c19 from './19.高阶组件';
import c20 from './20.与第三方库协同';
import c21 from './21.深入 JSX';
import c22 from './22.性能优化';
import c23 from './23.Portals';
import c24 from './24.不使用 ES6';
import c25 from './25.不使用 JSX';
import c26 from './26.协调';
import c27 from './27.Refs & DOM';
import c28 from './28.Render Props';
import c29 from './29.静态类型检查';
import c30 from './30.严格模式';
import c31 from './31.使用 PropTypes 类型检查';
import c32 from './32.非受控组件';
import c33 from './33.Web Components';
import c38 from './38.Hooks';
import c39 from './39.vList';

import './index.css';

c01.displayName = '01.Hello World';
c02.displayName = '02.JSX 简介';
c03.displayName = '03.元素渲染';
c04.displayName = '04.组件 & Props';
c05.displayName = '05.State & 生命周期';
c06.displayName = '06.事件处理';
c07.displayName = '07.条件渲染';
c08.displayName = '08.列表 & Key';
c09.displayName = '09.表单';
c10.displayName = '10.状态提升';
c11.displayName = '11.组合 vs 继承';
c12.displayName = '12.React 哲学';
c13.displayName = '13.无障碍';
c14.displayName = '14.代码分割';
c15.displayName = '15.Context';
c16.displayName = '16.错误边界';
c17.displayName = '17.Refs 转发';
c18.displayName = '18.Fragments';
c19.displayName = '19.高阶组件';
c20.displayName = '20.与第三方库协同';
c21.displayName = '21.深入 JSX';
c22.displayName = '22.性能优化';
c23.displayName = '23.Portals';
c24.displayName = '24.不使用 ES6';
c25.displayName = '25.不使用 JSX';
c26.displayName = '26.协调';
c27.displayName = '27.Refs & DOM';
c28.displayName = '28.Render Props';
c29.displayName = '29.静态类型检查';
c30.displayName = '30.严格模式';
c31.displayName = '31.使用 PropTypes 类型检查';
c32.displayName = '32.非受控组件';
c33.displayName = '33.Web Components';
c38.displayName = '38.Hooks';
c39.displayName = '39.vList';

const routeMap = {
  c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12,
  c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24,
  c25, c26, c27, c28, c29, c30, c31, c32, c33, c38, c39
};

class App extends React.PureComponent {
  handleLinkClick = key => {
    window.history.pushState(null, null, `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, '');
    let CurrentPage = routeMap[currentPage] || c01;

    return (
      <div style={{paddingLeft: '280px'}}>
        <ul className='menu-list'>
          {Object.keys(routeMap).map(key => (
            <li
              key={key}
              className={key === currentPage ? 'is-active' : ''}
              style={{ listStyle: 'none' }}
            >
              <span className='link' onClick={this.handleLinkClick.bind(this, key)}>
                {routeMap[key].displayName}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: '30px 0' }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
