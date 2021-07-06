import React, { useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'heehee' },
    { id: 2, title: 'kakaka' },
    { id: 3, title: 'hihihi' },
  ]);

  function handleTodoList(todo) {
    const idx = todoList.findIndex(x => x.id === todo.id);
    if (idx < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoList} />
    </div>
  );
}

export default App;
