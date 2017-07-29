import React from 'react';
import TodoOptions from '../todoOptions/todoOptions';
import './todo.css';

export const Todo = ({ todoId, title, description }) =>
  <div className="Todo">
    <div className="Todo-header">
      <h4 className="Todo-title">{ title }</h4>
      <TodoOptions todoId={ todoId }/>
    </div>
    <p className="Todo-description">{ description }</p>
  </div>;
