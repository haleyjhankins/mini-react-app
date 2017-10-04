import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';

import Header from './components/Header';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      todos: [
        {id:0, text: "Make Dinner Tonight"},
        {id:1, text: "Wash clothes"},
        {id: 2, text: "Go to Gym"},
      ],
      nextId: 3
    }
    this.addTodo= this.addTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    console.log("Todo added; ", todoText);
  }

  removeTodo(id) {
    console.log("removing: ", id);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do App</h1>
        </header>

        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
        </div>

      </div>
    );
  }
}

export default App;
