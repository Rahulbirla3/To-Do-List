import React, { useState } from 'react'
import Todo from './Todo'
import { useSelector, useDispatch } from 'react-redux'
import { editData } from './todo/todoSlice';
import { AiFillEdit } from 'react-icons/ai';


const App = () => {

  const [val, setVal] = useState();
  const listVal = useSelector((state) => state.todos);

  const handleChange = (e) => {
    setVal(e.target.value);
  }

  const dispatch = useDispatch();


  return (
    <>
      <div className=" m-auto container h-96 flex align-center justify-center bg-red-400">
        {
          listVal.hideTodo && <>
            <div className='h-10 w-42' >
              <input type="text" value={val} onChange={handleChange} />
            </div>
            <AiFillEdit onClick={() => dispatch(editData(val))} />
          </>
        }
        <Todo />
      </div>


    </>
  )
}

export default App