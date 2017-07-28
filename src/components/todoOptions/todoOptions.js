import React from 'react';
import { connect } from 'react-redux';
import {setDone, setEdit, removeTodo} from '../../actions/todoActions';
import './todoOptions.css';

export const TodoOptions = ({ todoId, isDone, isEditing, setDone, setEdit, removeTodo }) =>
  <div className="TodoOptions">
    <input
      type="checkbox"
      className={ `TodoOptions-${ isDone ? 'done' : 'not-done'}` }
      onClick={ () => setDone(todoId, !isDone) }
      checked={ isDone }
    />
    <span
      className={ `TodoOptions-${ isEditing ? 'editing' : 'not-editing'}` }
      onClick={ () => setEdit(todoId, !isEditing) }
    >
      { isEditing ? 'Stop Editing' : 'Edit' }
    </span>
    <span className="TodoOptions-remove" onClick={ () => removeTodo(todoId) }>Remove</span>
  </div>;

const mapStateToProps = (state, props) => ({
  isDone: state.todos[props.todoId].isDone,
  isEditing: state.todos[props.todoId].isEditing
});

const mapDispatchToProps = {
  setDone,
  setEdit,
  removeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoOptions);