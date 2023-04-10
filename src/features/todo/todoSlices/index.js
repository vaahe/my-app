import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    taskList: [
        {
            id: 0,
            title: "Buy Milk",
            isCompleted: false
        }
    ],
    status: 'idle',
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.taskList = [...state.taskList, action.payload]
        },
        editTask: (state, action) => {
            state.taskList = state.taskList.map((task) =>
                task.id === action.payload.id ? { ...task, title: action.payload.title } : task)
        },
        deleteTask: (state, action) => {
            state.taskList = state.taskList.filter(task => task.id !== action.payload.id)
        },
    }
});

export const { addTask, editTask, deleteTask } = todoSlice.actions;

export const selectTaskList = (state) => state.todos.taskList;

export default todoSlice.reducer;
