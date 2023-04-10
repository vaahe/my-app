import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Input, ListItemButton, Typography } from '@mui/material';

import styles from "../../../styles/TodoItem.module.css";
import { deleteTask, editTask } from '../../../features/todo/todoSlices';

export const TodoItem = ({ task, id }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleDelete = () => {
        dispatch(deleteTask({
            id: task.id
        }))
    }

    const handleEdit = () => {
        setEditMode(!editMode);
    }

    const handleSave = ({ task }) => {
        setEditMode(!editMode);
        dispatch(editTask({
            id: task.id,
            title: newTitle
        }))
    }

    const handleTitle = (e) => {
        setNewTitle(e.target.value);
    }

    const handleComplete = (e) => {
        task.isCompleted = !task.isCompleted;
        console.log(task.isCompleted);
    }

    return (
        <ListItemButton key={id}>
            <Input type='checkbox' onClick={(e) => handleComplete(e)} />
            <Box sx={{ width: '100%' }}>
                {editMode ?
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Input type='text' value={newTitle} onChange={handleTitle} />
                        <Box>
                            <Button onClick={() => handleSave({ task })}>Save</Button>
                            <Button onClick={handleDelete}>Delete</Button>
                        </Box>
                    </Box>
                    :
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography className={task.isCompleted ? styles.taskTitle : null} variant='h4' component="span">{task.title}</Typography>
                        <Box>
                            <Button onClick={handleEdit}>Edit</Button>
                            <Button onClick={handleDelete}>Delete</Button>
                        </Box>
                    </Box>
                }
            </Box>
        </ListItemButton >
    )
}
