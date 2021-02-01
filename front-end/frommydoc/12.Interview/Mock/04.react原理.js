// react 原理

// 组件间传递数据方式
/**
 * props
 * Context组件 / 状态提升
 * redux
 */

// 生命周期
/**
 * 父子组件生命周期触发顺序
      在挂载时，子组件的生命周期在父组件的render周期中插入
      在更新时，子组件的生命周期在父组件的render周期中插入，特别的是父组件的 getSnapshotBeforeUpdate 会在子组件的 componentDidUpdate 之前走到
      在卸载时，先卸载父组件，然后卸载子组件
    
      挂载时： constructor getDerivedStateFromProps  render  componentDidMount
      更新时： getDerivedStateFromProps  shouldComponentUpdate render  getSnapshotBeforeUpdate componentDidUpdate
      挂载时： componentWillUnmount 
 */

// setState 内部机制
/**
 * 批量更新
 * 原理： stateChange如果是函数，传入前一个 state执行
 * 用宏任务或者微任务批量更新
 */

// 优化点
/**
 * shouldComponentUpdate PureComponent
 * immutable.js
 * 列表加key
 * memoize-one
 */

// 更新组件方式
/**
 * diff机制，产生差异，更新补丁
 * preact: 差生差异，随即渲染差异
 */

// Virtual Dom模型 diff算法
/**
 * diff对树进行分层比较，只对比两棵树同级别的节点。
 * 跨层级移动节点，将会导致节点删除，重新插入，无法复用。
 * diff对组件进行类比较，类相同的递归diff子节点，不同的直接销毁重建。
 * diff对同一层级的子节点进行处理时，会根据key进行简要的复用。两棵树中存在相同key的节点时，只会移动节点。
 */

 // fiber简介
 /**
  * React 15 及之前版本，协调算法（Stack Reconciler）会一次同步处理整个组件树。
  * 它会递归遍历每个组件（虚拟DOM树），去比较新旧两颗树，得到需要更新的部分。这个过程基于递归调用，一旦开始，很难去打断。
  * 也就是说，一旦工作量大，就会堵塞整个主线程（The main thread is the same as the UI thread.）。

  * 而事实上，我们的更新工作可能并不需要一次性全部完成，比如 offscreen 的 UI 更新并不紧急，
  * 比如 动画 需要优先完成——我们可以根据优先级调整工作，把diff过程按时间分片！
  * 
  * React 的一个核心概念是 UI 是数据的投影 ，组件的本质可以看作输入数据，输出UI的描述信息（虚拟DOM树）
  * 也就是说，渲染一个 React app，其实是在调用一个函数，函数本身会调用其它函数，形成调用栈。
  * 前面我们已经讲到，递归调用导致的调用栈我们本身无法控制，只能一次执行完成。
  * 而 Fiber 就是为了解决这个痛点，可以去按需要打断调用栈，手动控制 stack frame
  */
