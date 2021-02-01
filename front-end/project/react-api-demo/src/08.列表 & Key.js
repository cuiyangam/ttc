import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 'id1', val: 'a' },
        { id: 'id2', val: 'b' },
        { id: 'id3', val: 'c' },
      ]
    }
  }

  click = () => {
    this.state.list.reverse()
    this.forceUpdate();
  }
  splice = () => {
    this.state.list.splice(1, 1)
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <div>id作为索引</div>
        <ul>
          <button onClick={this.splice}>delete</button>&nbsp;
          <button onClick={this.click}>reverse</button>
          {
            this.state.list.map(
              (item, index) => <Li key={item.id} val={item.val}></Li>,
            )
          }
        </ul>

        <div>index作为索引</div>
        <ul>
          <button onClick={this.splice}>delete</button>&nbsp;
          <button onClick={this.click}>reverse</button>
          {
            this.state.list.map(
              (item, index) => <Li key={index} val={item.val}></Li>,
            )
          }
        </ul>
      </div>
    )
  }
}

class Li extends React.Component {
  componentDidMount() {
    console.log('mounted')
  }
  componentDidUpdate() {
    console.log('updated')
  }
  render() {
    return (
      <li>
        {this.props.val}
        <input type="text"></input>
      </li>
    )
  }
}

export default () => (
  <div>
    <pre>
      1.key 的特点
        key 只是在兄弟节点之间必须唯一
        不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。
    </pre>
    <App />
  </div>
);
