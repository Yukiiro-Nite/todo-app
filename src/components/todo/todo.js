import React from 'react';
import TodoOptions from '../todoOptions/todoOptions';
import './todo.css';

export const Todo = ({ todoId, title, description }) =>
  <div className="Todo">
    <div>
      <h4>{ title }</h4>
      <TodoOptions todoId={ todoId }/>
    </div>
    <p>{ description }</p>
  </div>;