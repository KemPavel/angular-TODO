import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { TodosEffects } from '../../effects/todos.effects';
import * as TodosActions from '../../store/todos/todos.actions';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'pk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  private title: string = 'Put some title here';
  private things: Array<string> = [];
  private date: string = new Date().toLocaleTimeString();;
  private name: string = 'test name for todo';
  private invalid: boolean = false;
  private condition: boolean = true;
  private users: User[];

  public varToChild1: string = 'Test varaible';
  public varToChild2: number = 42;
  public varToChild3: number = 84;
  public varToChild4: any = {
    val: 168, 
    name: 'test'
  };

  public value = 'my value';
  public val = 'my val';
  // public todos : Observable<any>;
  public addTodoSuccess$: Observable<any>;
  constructor(
    private httpService: HttpService,
    private store: Store<any>,
    private todosEffects: TodosEffects
  ) {   
    // this.store.dispatch(new TodosActions.GetTodo());
    // this.todos = store.select("todos"); 
    // this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(( { type } ) => type === TodosActions.TodoActionTypes.ADD_TODO_SUCCESS);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  addTodo( todo ) {
    this.store.dispatch(new TodosActions.AddTodo(todo));
  }

  ngOnInit() {
    this.httpService.getUsers().subscribe((data: User[]) => this.users = data);
    
    setInterval(() => {
      this.date = new Date().toLocaleTimeString();
      this.varToChild4.val++;
      console.log(this.varToChild4.val);
    }, 5000);
  }

  private onOutput(event: string): void {

    // console.log(typeof event);
  }

  private toggleDirective(): void {
    this.condition = !this.condition;
  }

  private addThing(thing: string): void {
    this.invalid = !this.invalid;
    this.things.push(thing);
  }

  private clearThings(): void {
    this.things = [];
  }
}
