import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <pre>
          1.受控组件
            被 React 控制取值的表单输入元素就叫做受控组件。
          2.表单元素改为受控组件
            给 value 复制
            添加onChange事件
            特例，<input type="file" />的 value 只读，所以它是 React 中的一个非受控组件
            如果指定了 value，但输入仍可编辑，则可能是意外地将value 设置为 undefined 或 null
        </pre>
        
        <form onSubmit={this.handleSubmit}>
          <label>
            名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}
export default NameForm
