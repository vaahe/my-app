import React from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const TodoPage = () => {
    return (
        <>
            <AddTodo />
            <TodoList />
        </>
    )
}

export default TodoPage;