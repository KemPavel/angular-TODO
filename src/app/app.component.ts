import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// import * as todoActions from './store/todos.actions';

interface AppState { 
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public message$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { 
    this.message$ = this.store.select('message');
  }

  // public addTodo(): void {
  //   // this.store.dispatch({type: 'ADD_TODO'});
  //   this.store.dispatch(new todoActions.AddTodo('title'));
  // }

  // public toggleTodo(): void {
  //   this.store.dispatch({type: 'TOGGLE_TODO'});
  // }
}
