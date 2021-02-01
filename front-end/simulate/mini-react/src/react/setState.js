import { renderComponent } from '../react-dom/index'

const setStateQueue = [];
const renderQueue = [];

function defer(fn) {
  return Promise.resolve().then(fn);
}

export function enqueueSetState(stateChange, component) {
  if (setStateQueue.length === 0) {
    defer(flush);
  }
  setStateQueue.push({
    stateChange,
    component
  });
  if (!renderQueue.some(item => item === component)) {
    renderQueue.push(component);
  }
}

function flush() {
  let item, component;
  while (item = setStateQueue.shift()) {
    const { stateChange, component } = item;
    // 如果没有prevState，则将当前的state作为初始的prevState
    if (!component.prevState) {
      component.prevState = Object.assign({}, component.state);
    }
    // 如果stateChange是一个方法
    if (typeof stateChange === 'function') {
      Object.assign(component.state, stateChange(component.prevState));
    } else {
      // 如果stateChange是一个对象
      Object.assign(component.state, stateChange);
    }
    component.prevState = component.state;
  }
  while (component = renderQueue.shift()) {
    renderComponent(component);
  }
}
