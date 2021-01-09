import React, { Component } from 'react';
import { withRouter } from '../lib';

class Logo extends Component {
  handleClick = () => {
    this.props.history.push('/profile')
  }
  render() {
    return (
      <a className="navbar-brand" onClick={this.handleClick}>新浪微博</a>
    );
  }
}
export default withRouter(Logo);