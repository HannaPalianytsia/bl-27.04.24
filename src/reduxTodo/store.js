import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/slice';

export const store = configureStore({ reducer: { todos: todosReducer } });

/*
state {
    todos -> state {items, isLoading, error}, 
    filter -> state " ", 
}

state.todos.items;
state.filter;
*/
