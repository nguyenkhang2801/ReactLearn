import React, { useEffect, useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import querystring from 'query-string';
import PostFilterForm from './components/PostFilterForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'heehee' },
    { id: 2, title: 'kakaka' },
    { id: 3, title: 'hihihi' },
  ]);

  const [postlist, setPostlist] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  })

  useEffect(() => {
    async function fetchPostlist() {
      try {
        const param = querystring.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${param}`;
        const response = await fetch(requestUrl);
        const reponseJSON = await response.json();
        const { data, pagination } = reponseJSON;
        setPostlist(data);
        setPagination(pagination);
      }
      catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }

    }
    fetchPostlist()
  }, [filter]);

  function handlePageChange(newpage) {
    console.log('page: ' + newpage);
    setFilter({
      ...filter,
      _page: newpage,
    });
  }

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

  function handleFilterChange(newfilter) {
    console.log('new: ', newfilter);
    setFilter({
      ...filter,
      _page: 1,
      title_like: newfilter.search,
    });
  }

  return (
    <div className="App">
      <h1>Khang Ngu</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoList} /> */}


      <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postlist} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
