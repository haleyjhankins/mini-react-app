import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do App</h1>
        </header>

        <div className="todo-wrapper">
          <Header />
        </div>

      </div>
    );
  }
}

export default App;
