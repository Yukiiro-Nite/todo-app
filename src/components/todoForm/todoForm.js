import React from 'react';
import { connect } from 'react-redux';
import TodoOptions from '../todoOptions/todoOptions';
import { editTodo } from '../../actions/todoActions';
import './todoForm.css';

export const TodoForm = ({ todoId, title, description, editTodo }) =>
  <div className="Todo">
    <div>
      <input
        type="text"
        value={ title }
        onChange={ (e) => editTodo(todoId, {title: e.target.value}) }
      />
      <TodoOptions todoId={ todoId }/>
    </div>
    <textarea
      value={description}
      onChange={ (e) => editTodo(todoId, {description: e.target.value}) } />
  </div>;

export default connect(null, { editTodo })(TodoForm);