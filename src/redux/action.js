import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "./actionTypes"


export const deleteTask = (id) => {
    return {
        type:DELETE_TASK,
        payload: id,

    };
};
export const addTask = (newTask) =>{
    return {
        type:ADD_TASK,
        payload:newTask,
    };
};

export const completeTask = (id) => {
    return {
        type:COMPLETE_TASK,
        payload: id,
    };
};