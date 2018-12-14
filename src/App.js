import React, { Component } from 'react';
import ToDoListPage from './component/ToDoListPage';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App"> 
        <div className="App-header">
          <ToDoListPage title = 'To Do List App' />
        </div>     
      </div>
    );
  }
}

export default App;
