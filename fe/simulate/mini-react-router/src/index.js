import React from 'react';
import ReactDOM from 'react-dom';
// 16.3 contextApi
import { HashRouter, Route, Link, Switch, Redirect, NavLink } from './lib';
import Home from './views/Home'
import Profile from './views/Profile'
import User from './views/User'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from './views/Logo';
import Private from './component/Private';
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Logo></Logo>
              </div>
              <ul className="navbar-nav nav">
                <NavLink to="/" exact={true}>首页</NavLink>
                <NavLink to="/profile">个人中心</NavLink>
                <NavLink to="/user" activeClassName={'active'}>用户信息</NavLink>
              </ul>
            </div>
          </div>
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Private path="/profile" component={Profile}></Private>
            <Route path="/user" component={User}></Route>
            <Redirect to="/"></Redirect>
          </Switch>

        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App></App>, window.root)