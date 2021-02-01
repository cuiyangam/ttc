import React from './react';  // JSX被babel编译为React.createElement,所以需要React
import ReactDOM from './react-dom';

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>Now: {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       num: 0
//     }
//   }

//   componentWillUpdate() {
//     console.log('update');
//   }

//   componentWillMount() {
//     console.log('mount');
//   }

//   onClick() {
//     this.setState({ num: this.state.num + 1 });
//   }

//   render() {
//     return (
//       <div onClick={() => this.onClick()}>
//         <h1>number: {this.state.num}</h1>
//         <button>add</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Counter />,
//   document.getElementById('root')
// );

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0
    }
  }
  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      // this.setState( { num: this.state.num + 1 } );
      this.setState(prevState => {
        console.log(prevState.num);
        return {
          num: prevState.num + 1
        }
      });
      // console.log(this.state.num);
    }
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.num}</h1>
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);