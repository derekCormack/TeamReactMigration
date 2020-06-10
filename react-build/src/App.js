import React, { Component } from 'react';
import Logo from './components/logo.js';
import './App.css';
import logo from './components/logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className ="header">
          <div className ="img"><img src={logo} className="App-logo img" alt="logo" /></div>
          <div onClick={this.logoClick}className ="img"><img src={logo} className="App-logo img" alt="logo" /></div>
          <div className ="img"><img src={logo} className="App-logo img" alt="logo" /></div>
          <div className ="img"><img src={logo} className="App-logo img" alt="logo" /></div>
        </div>
        <Logo />
      </div>
    );
  }
}
export default App;
