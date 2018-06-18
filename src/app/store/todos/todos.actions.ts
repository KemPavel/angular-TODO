import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
  ADD_TODO_FAILURE = 'ADD_TODO_FAILURE',

  TOGGLE_TODO = 'TOGGLE_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS',

  GET_TODOS = 'GET_TODOS',
  GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',
  GET_TODOS_FAILURE = 'GET_TODOS_FAILURE'
};

export class AddTodo implements Action {
  readonly type = TodoActionTypes.ADD_TODO;
  constructor(public payload: any) {}
}

export class AddTodoSuccess implements Action {
  readonly type = TodoActionTypes.ADD_TODO_SUCCESS;
  constructor(public payload: any) {}
}

export class AddTodoFailure implements Action {
  readonly type = TodoActionTypes.ADD_TODO_FAILURE;
  constructor(public payload: any) {}
}

export class GetTodo implements Action {
  readonly type = TodoActionTypes.GET_TODOS;
  constructor() {} //Check for right type payload
}

export class GetTodoSuccess implements Action {
  readonly type = TodoActionTypes.GET_TODOS_SUCCESS;
  constructor(public payload: any) {} //Check for right type payload
}

export class GetTodoFailure implements Action {
  readonly type = TodoActionTypes.GET_TODOS_FAILURE;
  constructor(public payload: any) {} //Check for right type payload
}



export type TodoActionsUnion = 
| AddTodo 
| AddTodoSuccess 
| AddTodoFailure 
| GetTodo 
| GetTodoSuccess
| GetTodoFailure;
