import React from 'react';
import { TodoItem } from './TodoItem';
import { useSelector } from 'react-redux';
import { List, Typography } from '@mui/material';
import { selectTaskList } from '../../../features/todo/todoSlices';

const TodoList = () => {
    const taskList = useSelector(selectTaskList);

    return (
        <List sx={{ mt: 6, mb: 4 }}>
            {
                taskList.length ?
                    taskList.map(task => <TodoItem task={task} key={task.id} />) :
                    <Typography variant='h4'>No Todos!</Typography>
            }
        </List>
    )
}

export default TodoList;