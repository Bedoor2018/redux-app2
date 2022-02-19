import {ADD_TODO,TOGGLE_TODO,SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} from './types'



//action creater
export const onAddTodo = (content) => {
    return{type: ADD_TODO,
        content: content }};

export const onToggleTodo = (content) => {

        return{
            type: TOGGLE_TODO,
            content: content
} };

export const onShowAll = () => {

    return{
        type: SHOW_ALL
} };

export const onShowCompleted = () => {

    return{
        type: SHOW_COMPLETED
} };

