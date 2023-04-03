import React, { useState } from 'react'
import TodoData from './TodoData';
import { useDispatch } from 'react-redux';
import { addTodo } from './todo/todoSlice';
import { useSelector } from 'react-redux';


const Todo = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState();
    
    const listVal = useSelector((state) => state.todos);

    const handleChange = (e) => {
        setData(e.target.value);
    }

    const sendData = (e) => {
        e.preventDefault();
        dispatch(addTodo(data));
    }

    return (
        <>
            <div className='w-72 bg-slate-500'>
                <div className="w-full p-2 flex justify-evenly align-top ">
                    <input type="text" placeholder='Enter the value' value={data} onChange={handleChange} />
                    <button className='border-2 p-1' onClick={sendData} >Add</button>
                </div>
               {listVal.todoList?.map((listVal , i) =><TodoData key={i} listVal={listVal} id={i} /> )} 
            </div>
        </>
    )
}

export default Todo