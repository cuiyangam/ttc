import React from 'react';

export default () => (

  <div>
    <div>
      组件的生命周期：
        挂载时：
          constructor
          getDerivedStateFromProps
          render
          componentDidMount
        更新时：
          getDerivedStateFromProps(props, state)
          shouldComponentUpdate(nextProps, nextState)
          render
          getSnapshotBeforeUpdate(prevProps, prevState)
          componentDidUpdate(prevProps, prevState, snapshot)
        卸载时：
          componentWillUnmount
    </div><br/>
  </div>
);
