import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { TodosEffects } from '../../effects/todos.effects';
import * as TodosActions from '../../store/todos/todos.actions';
import 'rxjs/add/operator/filter';
import { map } from 'rxjs/operators';
import "rxjs/add/observable/interval";

@Component({
  selector: 'pk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  public title: string = 'Put some title here';
  public things: Array<string> = [];
  public date: string = new Date().toLocaleTimeString();;
  public name: string = 'test name for todo';
  public invalid: boolean = false;
  public condition: boolean = true;
  public users: User[];
  public phoneAsync: Observable<string>;
  public phones = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];
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
    this.showPhoneAsync();
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

  public showPhoneAsync(): void {
    this.phoneAsync = Observable.interval(500).pipe(map((i:number)=> this.phones[i]));
  }

  public onOutput(event: string): void {

    // console.log(typeof event);
  }

  public toggleDirective(): void {
    this.condition = !this.condition;
  }

  public addThing(thing: string): void {
    this.invalid = !this.invalid;
    this.things.push(thing);
  }

  public clearThings(): void {
    this.things = [];
  }
}
