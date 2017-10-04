import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';

import Header from './components/Header';

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
          <TodoInput />
        </div>

      </div>
    );
  }
}

export default App;
