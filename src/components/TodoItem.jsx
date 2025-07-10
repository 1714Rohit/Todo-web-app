import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
    </div>
  );
}

export default TodoItem;