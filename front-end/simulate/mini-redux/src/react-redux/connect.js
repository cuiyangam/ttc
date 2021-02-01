import React from 'react';
import Context from './context';
import { bindActionCreators } from '../redux';

let connect = (mapStateToProps, mapDipsatchToProps) => (Component) => {
  return () => {
    class Proxy extends React.Component {
      state = mapStateToProps(this.props.store.getState());
      componentDidMount() {
        this.unsub = this.props.store.subscribe(() => {
          this.setState(mapStateToProps(this.props.store.getState()))
        })
      }
      componentWillUnmount() {
        this.unsub();
      }
      render() {
        let mapDispatch;
        //如果第二个参数传递的是一个对象，把对象直接进行包装即可
        if (typeof mapDipsatchToProps === 'object') { 
          mapDispatch = bindActionCreators(mapDipsatchToProps, this.props.store.dispatch);
        } else {
          mapDispatch = mapDipsatchToProps(this.props.store.dispatch);
        }
        return <Component {...this.state} {...mapDispatch}></Component>
      }
    }
    return <Context.Consumer>
      {({ store }) => {
        // 将 store 传递给代理组件
        // 将组件添加一层代理，使得父组件更新时候自动更新子组件
        return <Proxy store={store}></Proxy>
      }}
    </Context.Consumer>
  }
}

export default connect;