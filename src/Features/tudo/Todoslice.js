import { createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {

    todos :  [{id : 1 , text : "Hello World"}]

};

export const  todoSlice  = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTodo : (state ,action) => {
            const tudo = {
                id :  nanoid(),
             text : action.payload
            }
            state.todos.push(tudo)
        },
        RemoveTodo : (state ,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo , RemoveTodo} = todoSlice.actions

export default todoSlice.reducer