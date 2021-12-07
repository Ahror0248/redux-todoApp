import * as types from "./actionTypes"

export function addTodo(title){
    return{
        type: types.add_todo,
        payload: title
    }
}

export function toggleTodo(id){
    return{
        type: types.toggle_todo_completed, 
        payload: id
    }
}