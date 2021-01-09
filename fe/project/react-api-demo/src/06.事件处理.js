import React from 'react';

class Toggle1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class Toggle2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class Toggle3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      // 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this。
      <button onClick={(e) => this.handleClick(e)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class Toggle4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick() {
    // 高阶函数：接受一个或多个函数作为输入或者输出一个函数
    return (e) => {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  }

  render() {
    return (
      <button onClick={this.handleClick()}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default () => (
  <div>
    <div>1.在constructor中绑定</div>
    <Toggle1/>
    <div>2.用实验性class语法绑定</div>
    <Toggle2/>
    <div>3.用箭头函数绑定</div>
    <Toggle3/>
    <div>4.用高阶函数绑定</div>
    <Toggle4/>
    <div>
      后两种问题在于每次渲染 button 时都会创建不同的回调函数。会进行额外的重新渲染。
    </div>
  </div>
);
