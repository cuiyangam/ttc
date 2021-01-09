// 创建一个store
function createStore(reducer, enhancer) {
  let state;
  let listeners = [];
  let getState = () => state;
  let subscribe = (fn) => {
    listeners.push(fn);
    return () => {
      listeners = listeners.filter(l => l != fn);
    }
  }
  // reducer 就是一个 applyMiddleware, 简化掉原实现中第二个参数
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer);
  }
  let dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(fn => fn());
  }
  dispatch({ type: '@INIT' });
  return {
    subscribe,
    getState,
    dispatch
  }
}

// 将多个状态多个reducer合并为一个状态一个reducer
let combineReducers = (reducers) => {
  let obj = {}
  return (state = {}, action) => {
    for (let key in reducers) {
      obj[key] = reducers[key](state[key], action);
    }
    return obj;
  }
}

// 将 actions 映射为派发事件的函数
let bindActionCreators = (actions, dispatch) => {
  let obj = {}
  for (let key in actions) {
    obj[key] = (...args) => dispatch(actions[key](...args));
  }
  return obj;
}

// 把多个中间件进行组合,形成洋葱模型
let compose = (...fns) => {
  return fns.reduce((a, b) => (...args) => a(b(...args)));
}

// 自动执行 middlewares 的第一个函数 把最终的函数替换掉原有的dispatch方法
let applyMiddleware = (...middlewares) => (createStore) => (reducer) => {
  let store = createStore(reducer);
  let middles = middlewares.map(middle => middle(store));
  let dispatch = compose(...middles)(store.dispatch);
  return {
    ...store,
    dispatch
  }
}

export {
  createStore,
  applyMiddleware,
  compose,
  bindActionCreators,
  combineReducers
}