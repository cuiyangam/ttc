import React from 'react';


class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('child constructor');
  }
  static getDerivedStateFromProps() {
    console.log('child getDerivedStateFromProps');
    return null;
  }
  shouldComponentUpdate() {
    console.log('child shouldComponentUpdate');
    return true;
  }
  render() {
    console.log('child render');
    return <div>child</div>;
  }
  getSnapshotBeforeUpdate() {
    console.log('child getSnapshotBeforeUpdate');
  }
  componentDidMount() {
    console.log('child componentDidMount');
  }
  componentDidUpdate() {
    console.log('child componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('parent constructor')
  }
  static getDerivedStateFromProps() {
    console.log('parent getDerivedStateFromProps');
    return null;
  }
  shouldComponentUpdate() {
    console.log('parent shouldComponentUpdate');
    return true;
  }
  render() {
    console.log('parent render');
    return <div>
      parent {this.props.value}
      <Child></Child>
    </div>;
  }
  getSnapshotBeforeUpdate() {
    console.log('parent getSnapshotBeforeUpdate');
  }
  componentDidMount() {
    console.log('parent componentDidMount');
  }
  componentDidUpdate() {
    console.log('parent componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('parent componentWillUnmount');
  }
}

export default class cc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: 'on'}
  }
  
  render() {
    return (
      <div>
        <pre>
          1. State
            state 是私有的，并且完全受控于当前组件
        </pre>
        <pre>
          2. State 特点
            state 可能会异步更新
            可以让 setState((state, props) => ({})) 接收一个函数而不是一个对象来拿到正确的state
        </pre>

        <Parent value={this.state.isToggleOn}></Parent>
        <div onClick={this._click.bind(this)}>点我测试父子组件生命周期触发顺序</div>

        <pre>
          3. 父子组件生命周期触发顺序
            在挂载时，子组件的生命周期在父组件的render周期中插入
            在更新时，子组件的生命周期在父组件的render周期中插入，特别的是父组件的 getSnapshotBeforeUpdate 会在子组件的 componentDidUpdate 之前走到
            在卸载时，先卸载父组件，然后卸载子组件
        </pre>
      </div>
    );
  }
  _click (){
    this.setState((state) => ({
      isToggleOn: state === 'on' ? 'off' : 'on',
    }));
  }
}
