import reducer from './reducer'
import { applyMiddleware, compose, createStore } from '../redux'

// redux-thunk 实现异步
let reduxThunk = (store) => (dispatch) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, store.getState);
  }
  return dispatch(action);
}

let reduxLogger1 = (store) => (dispatch) => (action) => {
  console.log('1', store.getState());
  dispatch(action);
  console.log('1', store.getState());
}
let reduxLogger2 = (store) => (dispatch) => (action) => {
  console.log('2', store.getState());
  dispatch(action);
  console.log('2', store.getState());
}

// 使用 redux-devtools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// let store = createStore(reducer,composeEnhancers(applyMiddleware(reduxLogger1,reduxLogger2)))
let store = createStore(reducer, applyMiddleware(reduxLogger1, reduxLogger2))

export default store;