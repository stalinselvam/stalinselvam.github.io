import React, { Component } from 'react';
import ToDoListPage from './component/ToDoListPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoListPage title = 'To Do List App' />
      </div>
    );
  }
}

export default App;
