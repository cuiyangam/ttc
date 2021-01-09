// import { renderComponent } from '../react-dom';
import { enqueueSetState } from './setState';

function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  }
}
class Component {
  constructor(props = {}) {
    this.state = {};
    this.props = props;
  }
  // setState(stateChange) {
  //   // 将修改合并到state
  //   Object.assign(this.state, stateChange);
  //   renderComponent(this);
  // }
  setState(stateChange) {
    enqueueSetState(stateChange, this);
  }
}
const React = {
  createElement,
  Component
}

export default React;