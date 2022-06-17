import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { completeTask, deleteTask, editTask } from '../redux/action'

const Task = ({task}) => {
  const [inputAction, setInputAction] = useState(task.action)
  const [open, setOpen] = useState(false)
  const handleOpen=()=>setOpen(true)
  const handleClose =()=>setOpen(false)
    console.log(task)
    const dispatch = useDispatch()
    const handleEdit=()=>{
      const editedTask={
        id:task.id,
        action:inputAction,
        isDone:task.isDone
      }
      dispatch(editTask(editedTask))
      handleClose()
    }
  return (
    <div>
      {
      open? <div>
       <input  value={inputAction}type="text" onChange={(e)=>setInputAction(e.target.value)} />
      <button onClick={handleEdit}>confirm</button>
      <button onClick={handleClose}>cancel</button>
      </div>
      :<div>
      <h3 className={task.isDone && "done"}> {task.action} </h3>
        <button onClick={()=>dispatch(deleteTask(task.id))}> Delete</button>
        <button onClick={()=>dispatch(completeTask(task.id))}>  {task.isDone?"undo":"complete"}  </button>
        <button onClick={handleOpen}>edit</button>
        </div> 
      }

    </div>
  )
}

export default Task