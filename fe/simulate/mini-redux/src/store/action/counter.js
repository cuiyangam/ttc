import * as Types from '../action-types';

export default {
  add(value) {
    // reduxThunk 会判断 会让返回的函数执行 并且把dispatch权限交给用户自己
    return { type: Types.INCREMENT, v: value }
    // return (dispatch,getState)=>{
    //   setTimeout(() => {
    //     console.log(getState())
    //     dispatch({ type: Types.INCREMENT, v: value });
    //   }, 1000);
    // }
  },
  minus(value) {
    return { type: Types.DECREMENT, v: value }
    //  new Promise((resolve,reject)=>{
    //   setTimeout(function(){
    //     resolve()
    //   },2000)
    // })
  }
}