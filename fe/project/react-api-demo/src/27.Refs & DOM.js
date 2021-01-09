import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput}
        />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}

class CustomTextInput2 extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // 在 componentDidMount 或 componentDidUpdate 触发前，React 会保证 refs 一定是最新的
    this.focusTextInput();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}


function CustomTextInput3(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  componentDidMount() {
    console.log(this.inputElement);
  }
  render() {
    return (
      <CustomTextInput3
        inputRef={el => this.inputElement = el}
      />
    );
  }
}

export default () => (
  <div>
    <div>
      下面是几个适合使用 refs 的情况：<br/>
      1.管理焦点，文本选择或媒体播放。<br/>
      2.触发强制动画。<br/>
      3.集成第三方 DOM 库。

    
    </div><br/>
    <div>
      ref 对象接收组件的实例或者DOM元素作为其 current 属性。<br/>
      你不能在函数组件上使用 ref 属性，因为他们没有实例。
    </div><br/>
    <div>
      两种用法：React.createRef; 回调ref
    </div><br/>

    <CustomTextInput/>
    <AutoFocusTextInput/>

    <CustomTextInput2/>

    <Parent/>
  </div>
);
