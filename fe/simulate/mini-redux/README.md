本项目以 [Create React App](https://github.com/facebook/create-react-app)为脚手架.

### 运行项目
1.运行 `npm start`    
2.访问地址 [http://localhost:3000](http://localhost:3000)    

### redux

1.createStore  创建一个store  
2.combineReducers  将多个状态多个reducer合并为一个状态一个reducer   
3.bindActionCreators  将 actions 映射为派发事件的函数   
4.compose  把多个中间件进行组合,形成洋葱模型   
5.applyMiddleware  自动执行 middlewares 的第一个函数 把最终的函数替换掉原有的dispatch方法   

### react-redux
1.connect  将 store 绑定在视图组件