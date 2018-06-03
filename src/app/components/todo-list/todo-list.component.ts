import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import "rxjs/add/operator/take";

import { TodosEffects } from '../../store/effects/todos.effects';
import * as TodosActions from '../../store/todos.actions';
import * as FilterActions from '../../store/filters.actions';
import { Todos, Todo } from '../../models/todos';

@Component({
  selector: 'pk-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() todoName: string;
  @Input() value1: string;
  @Input() value2: number;
  @Input() value3: number;
  @Input() set value4(value: number) {
    this._value4 = value || 256;
  };

  public filters = [
    {id: 'SHOW_ALL', title: 'All'},
    {id: 'SHOW_COMPLETED', title: 'Completed'},
    {id: 'SHOW_ACTIVE', title: 'Active'}
  ];
  public activeFilter: Observable<any>;
  public todoList$: Observable<Todos>; //Learn ngrx
  public activeFilter$: Observable<string>;
  public addTodoSuccess$: Observable<any>;
  public todoList: Todos; 

  private _value4: number;


  @Output() onChanged = new EventEmitter<string>();
  @Output() todoNameChange = new EventEmitter<string>();

  constructor( private store: Store<any>, private todosEffects : TodosEffects) {
    this.store.dispatch(new TodosActions.GetTodo());
    this.activeFilter = store.select('filters').take(1);
    this.todoList$ = store.select('todos');
    this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(( {type} ) => type === TodosActions.TodoActionTypes.ADD_TODO_SUCCESS);
   }

  ngOnInit() {
    // console.log(typeof this.value2);
    // console.log(typeof this.value1);
    this.todoList$.subscribe(item => {
      this.todoList = item;
      console.log(item);
    });
  }

  public changeFilter( filter ) {
    this.store.dispatch(new FilterActions.SetVisibilityFilter(filter));
    this.store.dispatch(new TodosActions.GetTodo());
  }

  private onTodoNameChange(model: string): void {
    this.todoName = model;
    this.todoNameChange.emit(model);
  }

  private change(value: string): void {
    this.onChanged.emit(value);
  }

  get value4() {
    return this._value4;
  }


}
