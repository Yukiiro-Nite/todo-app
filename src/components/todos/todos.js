import React from 'react';
import { connect } from 'react-redux';
import { Todo } from '../todo/todo';
import TodoForm from '../todoForm/todoForm';
import './todos.css';

export const Todos = ({ todos }) =>
  <div className="Todos">
    {
      Object.keys(todos)
        .map( key => ({ ...todos[key], id: key }))
        .filter(({ removed }) => !removed)
        .sort((a, b) => a._createDate < b._createDate)
        .map(({ id, title, description, isEditing }, index) => isEditing
          ? <TodoForm key={ index } todoId={ id } title={ title } description={ description }/>
          : <Todo key={ index } todoId={ id } title={ title } description={ description }/>
        )
    }
  </div>;

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);