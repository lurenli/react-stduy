import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br/>
        <div className="index_caidan">
           <span>内页1</span>  <span> 内页2</span>
        </div>
        <br/>
        <div className="index_tiaozhuan">
                跳转到列表去
        </div>
      </div>
    );
  }
}
export default App;
