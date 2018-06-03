import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { TodoActionTypes, AddTodo, GetTodo } from "../todos.actions";
import { TodosService } from "../../services/todos.service";

import { switchMap, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class TodosEffects {
  constructor ( 
    private actions$: Actions, //TODO figure out how to set types for actions 
    private todosService: TodosService,
    private store : Store<any>
  ) { }

  @Effect() getTodos$ = this.actions$.pipe(
    ofType<GetTodo>(TodoActionTypes.GET_TODOS),
    withLatestFrom(this.store.select('filters'), ( action, filter ) => filter),
    switchMap(filter => 
      this.todosService.getTodos(filter)
        .map(todos => ({type: TodoActionTypes.GET_TODOS_SUCCESS, payload: todos})) //If request returns data 
        .catch(() => Observable.of({type: TodoActionTypes.GET_TODOS_FAILURE})) //If request failed 
    ));

  @Effect() addTodo$ = this.actions$.pipe(
    ofType<AddTodo>(TodoActionTypes.ADD_TODO),
    switchMap(action => 
      this.todosService.addTodo(action.payload)
        .map(todo => ({type: TodoActionTypes.ADD_TODO_SUCCESS, payload: todo}))
        .catch(() => Observable.of({type: TodoActionTypes.ADD_TODO_FAILURE}))
    ));

}