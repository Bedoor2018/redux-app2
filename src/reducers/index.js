import {ADD_TODO,TOGGLE_TODO,SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} from '../actions/types'

export default function (state=[{task:"task1",type:"taskCompleted"}],action={}) {

    if(action.type==ADD_TODO){
        // state.push({task: action.content,type: "task"})
        // state = state.slice();
       return  [...state,{task:action.content,type:"task"}];
    }
    if(action.type==TOGGLE_TODO){

         return state;
    }
    if(action.type==SHOW_ALL){

    return [...state];
    }
    if(action.type==SHOW_COMPLETED){
        
        return [...state.filter(st => st.type=="taskCompleted")];
    }
    else{
        return [...state];
    }
}