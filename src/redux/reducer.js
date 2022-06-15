import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "./actionTypes";

const init={
    tasks:[
        {id:Math.random(),action:'learn react',isDone:true},
        {is:Math.random(),action:'learn redux',isDone:false}
    ]
}

const reducer = (state=init,{type,payload})=>{
    switch (type) {
        case DELETE_TASK:
            return{
                ...state,
                tasks:state.tasks.filter(el=>el.id!==payload)
            };

        case ADD_TASK:
            return{
                ...state,
                tasks:[...state.tasks, payload],
            }
        case COMPLETE_TASK:
            return {
                ...state,
                tasks:state.tasks.map((el)=>
                el.id===payload? {...el, isDone: !el.isDone} : el),
            };        
       
        default:
        return state;

}
};
export default reducer