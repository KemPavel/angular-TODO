import { Action } from '@ngrx/store';
import { Todos } from '../../models/todos';
import { TodoActionsUnion, TodoActionTypes }  from './todos.actions';

const initialState: Todos = {
  todos: [], 
  pending: false,
  error: null
};

export function todosReducer(state: Todos = initialState, action: TodoActionsUnion) {
  switch (action.type) {
    case TodoActionTypes.GET_TODOS:
      return Object.assign({}, state, {pending: true, error: null});

    case TodoActionTypes.GET_TODOS_SUCCESS:
      return Object.assign({}, state, {todos: action.payload, pending: false});

    case TodoActionTypes.GET_TODOS_FAILURE:
      return Object.assign({}, state, {pending: false, error: new Error("Error")});

    case TodoActionTypes.ADD_TODO:
      return Object.assign({}, state, {pending: true, error: null});

    case TodoActionTypes.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {todos: [...state.todos, action.payload], pending: false});

    case TodoActionTypes.ADD_TODO_FAILURE:
      return Object.assign({}, state, {pending: false, error: new Error("Error")});
      
    default:
      return state;
  }
}