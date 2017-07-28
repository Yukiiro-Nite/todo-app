import React from 'react';
import { connect } from 'react-redux';
import { Todo } from '../todo/todo';
import './todos.css';

export const Todos = ({ todos }) =>
  <div className="Todos">
    {
      Object.keys(todos)
        .map( key => ({ ...todos[key], id: key }))
        .filter(({ removed }) => !removed)
        .map(({ id, title, description }, index) =>
          <Todo key={ index } todoId={ id } title={ title } description={ description }/>
        )
    }
  </div>;

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);