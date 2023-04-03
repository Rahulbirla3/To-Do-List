import React from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './todo/todoSlice';
import { editTodo } from './todo/todoSlice';


const TodoData = ({ listVal, id }) => {

    const dispatch = useDispatch();

    return (
        <div className='bg-green-500 h-7 m-2 flex justify-around items-center ' >
            <p>{listVal}</p>
            <div className='flex content-center items-center' >
                <AiFillDelete onClick={() => dispatch(deleteTodo(id))} />
                <AiFillEdit onClick={() => dispatch(editTodo(id))} />
            </div>
        </div>
    )
}

export default TodoData