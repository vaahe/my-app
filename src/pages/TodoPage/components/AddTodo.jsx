import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, Input } from '@mui/material';
import * as Yup from 'yup';

import "../../../styles/AddTodo.module.css";
import { addTask } from '../../../features/todo/todoSlices';


const AddTodo = () => {
    const schema = Yup.object().shape({
        title: Yup.string().min(3, 'Too Short!').max(30, 'Too long!').required('Required')
    })

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            id: Date.now(),
            title: '',
            isCompleted: false
        },
        onSubmit: values => {
            dispatch(addTask(values));
            formik.resetForm();
        },
        validationSchema: schema
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                sx={{ width: '85%', fontSize: '32px' }}
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            <Button type="submit">Add Todo</Button>
        </form>
    );
};

export default AddTodo;