import React from 'react';
import HOCRefs from './HOCRefs';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const ref = React.createRef();

class HOCRefsTest extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <HOCRefs ref={this.textInput} />
    );
  }
}
// -----------------------------------

export default () => (
  <div>
    <div>
      当你开始在组件库中使用 forwardRef 时，你应当将其视为一个破坏性更改
    </div><br/>

    <div>
      refs转发
    </div><br/>
    <FancyButton ref={ref}>Click me!</FancyButton>

    <div>
      在高阶组件中转发 refs
    </div><br/>
    <HOCRefsTest/>
  </div>
);
