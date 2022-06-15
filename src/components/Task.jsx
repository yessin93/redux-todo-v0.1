import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { completeTask, deleteTask } from '../redux/action'

const Task = ({task}) => {
    console.log(task)
    const dispatch = useDispatch()
  return (
    <div>
        <h3 className={task.isDone && "done"}> {task.action} </h3>
        <button onClick={()=>dispatch(deleteTask(task.id))}> Delete</button>
        <button onClick={()=>dispatch(completeTask(task.id))}>  {task.isDone?"undo":"complete"}  </button>

    </div>
  )
}

export default Task