import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todos';

import { mapTo } from 'rxjs/operators';
import 'rxjs/add/observable/timer'; 

@Injectable()
export class TodosService {

  private todos: Todo[] = [
    {id: '1', title: 'title 1', completed: false},
    {id: '2', title: 'title 2', completed: true},
    {id: '3', title: 'title 3', completed: false},
    {id: '4', title: 'title 4', completed: true}
  ];

  constructor() { }

  public getTodos(filter: string) {
    //TODO http GET request
    return Observable.timer(1000).pipe(mapTo(this.getVisibleTodos(this.todos, filter));
  }

  public addTodo(title): Observable<Todo> {
    //TODO http POST request
    return Observable.timer(2000).pipe(mapTo({id: Math.random() + '', title, completed: false}))
  }

  private getVisibleTodos(todos: Todo[], filter: string): Todo[] {
    if( filter === "SHOW_ALL" ) {
      return todos;
    } else if( filter === "SHOW_COMPLETED" ) {
      return todos.filter(t => t.completed);
    } else {
      return todos.filter(t => !t.completed);
    }
  }

}
