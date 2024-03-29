import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { filtrosVarios } from "./filter/filter.actions";
import { filtroReducer } from "./filter/filter.reducer";

export interface AppState {
    todos: Todo[],
    filtro:filtrosVarios
    
}

export const appReducers: ActionReducerMap<AppState> = {
    todos:todoReducer,
    filtro:filtroReducer
}