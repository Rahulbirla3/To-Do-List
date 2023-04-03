import { createSlice } from '@reduxjs/toolkit';


const initialState = { todoList: [], hideTodo: false, ids: "" }

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // console.log(action.payload);
                state.todoList = [...state.todoList, action.payload]
        },
        deleteTodo: (state, action) => {
            const filterData = state.todoList.filter((v, i) => i !== action.payload)
            console.log(filterData);
            state.todoList = [...filterData]
        },
        editTodo: (state, action) => {
            state.hideTodo = !state.hideTodo;
            state.ids = action.payload;
        },
        editData: (state, action) => {
            state.hideTodo = !state.hideTodo;
            const Data = state.todoList.map((v, i) => {
                return i === state.ids ? action.payload : v;
            })
            console.log(Data);
            state.todoList = [...Data]
        }
    }
});

// this is for dispatch
export const { addTodo, deleteTodo, hideEdit, editTodo, editData } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;