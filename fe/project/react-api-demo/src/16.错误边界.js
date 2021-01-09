
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // 你同样可以将错误日志上报给服务器
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default () => (
  <div>
    <ErrorBoundary>
      <div>
        如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch()<br/>
        这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界
      </div><br/>
    </ErrorBoundary>
  </div>
);
