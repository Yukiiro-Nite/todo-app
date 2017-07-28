import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from './components/todos/todos';
import { createTodo } from './actions/todoActions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={ () => this.props.createTodo() }>Create new Todo</button>
        <Todos />
      </div>
    );
  }
}

export default connect(null, { createTodo })(App);
