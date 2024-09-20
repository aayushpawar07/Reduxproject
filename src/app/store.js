import {configureStore} from  '@reduxjs/toolkit';

import todoReducer from  '../Features/tudo/Todoslice';


export  const store = configureStore({
    reducer: todoReducer 
})