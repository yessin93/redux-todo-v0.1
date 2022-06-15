import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addTask } from '../redux/action'

const AddTask = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id:Math.random(),
            action:text,
            isDone:false
        }
        dispatch(addTask(newTask))
        setText('')
    }
  return (
    <div>
        <h1>To do list </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={((e)=>setText(e.target.value))} />
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddTask