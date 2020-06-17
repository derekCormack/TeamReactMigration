import React, { Component } from 'react';
import Logo from './components/logo.js';
import './App.css';
import logo from './components/logo.svg';
import Accounts from './components/account/accountsComp.js';
import Game from './components/tictactoe.js';
import Cities from './components/cities/cities.js';
class App extends Component {
  constructor() {
    super()
    this.state = {
      appToRender: <Accounts />,
    }
    console.log("what's state: ", this.state.appToRender);
  }

  logoClick = (parm) => {

    console.log("onclick ", parm.target.getAttribute("todo"));

    switch (parm.target.getAttribute("todo")) {
      case "logo":
        this.setState({ appToRender: <Logo /> });
        break;
      case "tictactoe":
        this.setState({ appToRender: <Game /> });
        break;
      case "accounts":
        this.setState({ appToRender: <Accounts /> });
        break;
      default:
        this.setState({ appToRender: <Cities /> });
    }

  }
  render() {
    return (
      <div>
        <div className="header">
          <div onClick={this.logoClick} todo="logo" className="img"><img src={logo} className="App-logo img" alt="logo" /></div>
          <div onClick={this.logoClick} todo="tictactoe" className="img"><img src={logo} className="App-logo img" alt="logo" /></div>
          <div onClick={this.logoClick} todo="accounts" className="img"><img src={logo} className="App-logo img" alt="logo" /></div>
          <div onClick={this.logoClick} todo="city" className="img"><img src={logo} className="App-logo img" alt="logo" /></div>
        </div>
        {this.state.appToRender}
      </div>
    );
  }
}
export default App;
